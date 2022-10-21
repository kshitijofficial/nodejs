const http = require("http"); //import module

const server = http.createServer((req, res) => {
  console.log("Hello World");
});

server.listen(3000);
