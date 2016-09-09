
var exec = require('child_process').exec;
var cmd = './mytouch.sh';
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
    // //  console.log(stderr);
    })
};
