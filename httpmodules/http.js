const http = require("http");
http.createServer((req,res)=>{
    res.end("hello i am here...");

}).listen(3000);
