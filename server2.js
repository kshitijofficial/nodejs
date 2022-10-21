const http = require("http"); //import module

const server = http.createServer((req, res) => {
  console.log("URL:", req.url, "Method:", req.method, "Header:", req.headers);
});

server.listen(3000);
