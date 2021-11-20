const net = require("net");
const {IP, PORT, name} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Serversays: ", data);
  });  

  conn.on("connect", () => {
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = connect;