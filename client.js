const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Serversays: ', data);
  });  

  conn.on('connect', () => {
    conn.write('Name: MLK');
  });

  return conn;
};

module.exports = {connect};