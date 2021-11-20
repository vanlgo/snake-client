const net = require("net");
const {connect} = require("./client");

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