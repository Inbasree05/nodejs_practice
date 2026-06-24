const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("Request Created");
    res.write("Hello from Node.js Server");
    res.end();
})
const PORT=3000;
server.listen(PORT,'localhost',()=>{
    console.log("server is listening");
})