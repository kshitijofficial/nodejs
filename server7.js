const http = require("http"); //import module
const serverContent = require("./serverContent");
console.log(serverContent.data);
const server = http.createServer(serverContent.handler);

server.listen(3000);
