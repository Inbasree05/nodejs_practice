const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    fs.readFile('./docs/index.html',(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write("Error: File Not Found");
        }
        else{
            res.end(data);
        }
    })
})
server.listen(3000,'localhost',()=>{
    console.log("Server is listening");
})