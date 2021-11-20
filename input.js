let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (input) {
    if (input === "\u0003") {
      process.exit();
    } else if (input === "w") {
      conn.write("Move: up");
    } else if (input === "a") {
      conn.write("Move: left");
    } else if (input === "s") {
      conn.write("Move: down");
    } else if (input === "d") {
      conn.write("Move: right");
    } else if (input === "x") {
      conn.write("Say: Say it ain't soo-O-oo-O--");
    } else if (input === "c") {
      conn.write("Say: That gurrl...");
    } else if (input === "v") {
      conn.write("Say: ...is a hartbreakurrr");
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;