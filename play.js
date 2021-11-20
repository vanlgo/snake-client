const net = require("net");
const {connect} = require("./client");

// establishes a connection with the game server
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