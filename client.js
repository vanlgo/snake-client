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
    // setTimeout (() => {
    //   conn.write('Move: down');
    // }, 50)
    // setTimeout (() => {
    //   conn.write('Move: left');
    // }, 150)
    // setTimeout (() => {
    //   conn.write('Move: down');
    // }, 200)
    // setTimeout (() => {
    //   conn.write('Move: right');
    // }, 250)
    // setInterval (() => {
    //   conn.write('Move: down');
    // }, 50)
  });

  return conn;
};

module.exports = connect;