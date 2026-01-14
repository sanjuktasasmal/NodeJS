const http = require ("http");
const server = http.createServer(function(req,res){
 if(req.url== "/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write('<h1>This is Home</h1>')
    res.end();
 }
 else if(req.url=="/about"){
     res.writeHead(200,{"content-type":"text/html"})
    res.write('<h1>it is about section</h1>')
    res.end();
 }
 else if(req.url=="/content"){
     res.writeHead(200,{"content-type":"text/html"})
    res.write('<h1> content  section</h1>')
    res.end();
 }
})
server.listen(3000);
console.log("server is running");