const chokidar = require('chokidar')
const exec = require('child_process').exec
const watchFile = `${__dirname}/content/blog/cmd.txt`
const fs = require('fs')

function getCmd() {
  try {
    const raw = fs.readFileSync('./content/blog/cmd.txt', 'utf-8')
    console.log(`[info] raw: `, raw)
    const [cmd] = raw.split(',')
    return Promise.resolve(cmd)
  } catch (err) {
    console.error(err)
    Promise.resolve('')
  }
}

function task(cmd) {
  return new Promise((resolve, reject) => {
    let taskProcess = exec(cmd)

    taskProcess.stdout.on('data', data => {
      console.log(data)
    })

    taskProcess.stderr.on('data', err => {
      console.log(err)
    })

    taskProcess.on('exit', code => {
      if (code === 0) {
        resolve()
      } else {
        reject(code)
      }
    })
  })
}

let isRunning = false

async function run(cmd) {
  if (isRunning) return

  try {
    isRunning = true
    await task('rm -rf .cache')
    await task(cmd)
    isRunning = false
    return Promise.resolve()
  } catch (err) {
    isRunning = false
    console.error('[run error]: ', err)
  }
}

chokidar
  .watch(watchFile, {
    ignored: /(^|[\/\\])\../,
    depth: 5,
  })
  .on('all', async () => {
    const cmd = await getCmd()
    if (!cmd) {
      console.log(`[cmd is empty.]`)
      return
    }
    console.log('=======================')
    console.log('[task start]:', new Date())
    console.log('[task cmd]:', cmd)
    await run(cmd)
    console.log('[task end]:', new Date())
    console.log('=======================')
  })
