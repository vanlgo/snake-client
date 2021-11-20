const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541,
//   });

//   conn.setEncoding("utf8");

//   conn.on('data', (data) => {
//     console.log('Serversays: ', data);
//   });  

//   return conn;
// };

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   const handleUserInput = function (input) {
//     if (input === '\u0003') {
//       process.exit();
//     }
//   };

//   stdin.on('data', handleUserInput);

//   return stdin;
// };

setupInput();