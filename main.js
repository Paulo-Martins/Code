const electron = require('electron')
const {app,BrowserWindow} = electron
const ipc = require('electron').ipcMain
const dialog = require('electron').dialog
var exe = require('child_process').exec;
var cmd_check_root = './user_root.sh';
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

  ipc.on('check-sudo', function (event) {
      console.log("check-sudo");

      exe(cmd_check_root, function(error, stdout, stderr) {
      //   // command output is in stdout
      sudo = "2";
      console.log("out" + stdout);
    if (stdout==0) {
      sudo="Necessita de privilégios de administrador";
      console.log("sud = "+sudo);
      event.sender.send('is-not-sudo', sudo)

    }
      })


  });

  win.on('closed', () => {
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  win = null;
});
})
