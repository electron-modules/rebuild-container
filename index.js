// require('xprofiler').start({
//   log_dir: process.cwd(),
//   log_interval: 10,
// });

const { app: electronApp } = require('electron');
const sqlcipher = require('node-sqlcipher-alt');

console.log(sqlcipher);

electronApp.on('ready', async () => {
  console.log('ready');
});
