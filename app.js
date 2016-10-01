
var exec = require('child_process').exec;
var cmd = './mytouch.sh urubu';
// const manageWindowBtn = document.getElementById('manage');
// manageWindowBtn.addEventListener('click', function (event) {
//
//
//
//   // serialport.list(function (err, ports) {
//   //   ports.forEach(function(port) {
//   //   $('.ports').append('<option value='+port.comName +'>'+port.comName+'</option>');
//   //   console.log(port.comName);
//   //   console.log(port.pnpId);
//   //   console.log(port.manufacturer);
//   //   console.log("++++++++++++++++++++++++++++++++++");
//   //   });
//   //
//   //
//   // });
// });

$( document ).ready( readyFn );



function readyFn( jQuery ) {
    // Code to run when the document is ready.
    exec(cmd, function(error, stdout, stderr) {
    //   // command output is in stdout
    console.log(stdout);
    console.log(stderr);
    })

    const ipc = require('electron').ipcRenderer

    const selectDirBtn = document.getElementById('select-directory')

    selectDirBtn.addEventListener('click', function (event) {
        ipc.send('open-file-dialog')
      })

    ipc.on('selected-directory', function (event, path) {
        document.getElementById('selected-file').innerHTML = `You selected: ${path}`
      })
};
