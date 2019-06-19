const chokidar = require('chokidar')
const exec = require('child_process').exec
const watchForlder = `${__dirname}/content/blog`

let isRunning = false

chokidar.watch(watchForlder).on('all', path => {
  console.log('path', path)
  if (isRunning) return

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
})
