const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("event name", functionThatDoesSomething);

  conn.on('data', (data) => {
    console.log('Message from client: ', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect}