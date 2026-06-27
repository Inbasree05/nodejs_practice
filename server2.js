const http=require('http');
const fs=require('fs');
const _=require("lodash");
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    
    let path='./docs/';
    if(req.url=='/home'){
   res.writeHead(301,{Location:'/'});
    return res.end();
    }
else if(req.url=='/'){
    path+='index.html';
}
    else if(req.url=='/about'){
        path+='abot.html';
        res.statusCode=200;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            res.writeHead(404);
            return res.end("Error: File Not Found");
        }
        else{
        res.writeHead(200);
        res.end(data);

        }
    })
})
server.listen(3000,'localhost',()=>{
    console.log("Server is listening");
})