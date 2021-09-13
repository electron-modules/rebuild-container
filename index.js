require('xprofiler').start({
  log_dir: process.cwd(),
  log_interval: 10,
});

const { app: electronApp } = require('electron');

electronApp.on('ready', async () => {
  console.log('ready');
});
