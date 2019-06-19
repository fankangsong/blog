const chokidar = require('chokidar')
const exec = require('child_process').exec
const watchForlder = `${__dirname}/content/blog`

let isRunning = false

function run(path) {
  if (isRunning) return

  console.log('incoming', path)
  const buildProcess = exec('npm run build')
  isRunning = true

  buildProcess.stdout.on('data', data => {
    console.log('stdout:', data)
  })

  buildProcess.stderr.on('data', err => {
    console.log('stderr:', err)
    isRunning = false
  })

  buildProcess.on('exit', code => {
    console.log('exec exited: ', code)
    isRunning = false
  })
}

const options = {
  ignored: /(^|[\/\\])\../,
  depth: 5,
}
chokidar
  .watch(watchForlder, options)
  .on('add', path => {
    console.log('add')
    run(path)
  })
  .on('unlink', path => {
    console.log('unlink')
    run(path)
  })
  .on('unlinkDir', path => {
    console.log('unlinkDir')
    run(path)
  })
  .on('change', path => {
    console.log('change')
    run(path)
  })
  .on('ready', path => {
    console.log('raedy')
  })
