const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
let connecting = connect();

setupInput(connecting);