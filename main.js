const electron = require('electron')
const {app,BrowserWindow} = electron
const ipc = require('electron').ipcMain
const dialog = require('electron').dialog
app.on('ready', ()=> {

  let win = new BrowserWindow({width:"800",height:"600"})
  win.loadURL(`file://${__dirname}/index.html`)
  // var exec = require('child_process').exec;
  // var cmd = './mytouch.sh';
  win.webContents.openDevTools();
  // exec(cmd, function(error, stdout, stderr) {
  //   // command output is in stdout
  //   //console.log(stdout);
  // //  console.log(stderr);
  // })
  ipc.on('open-file-dialog', function (event) {
  dialog.showOpenDialog({defaultPath:'/home',
    properties: ['openFile', 'multiSelections']
  }, function (files) {
    if (files) event.sender.send('selected-directory', files)
  })
});
  win.on('closed', () => {
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  win = null;
});
})
