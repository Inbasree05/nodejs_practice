const exp=require('express');
const app=exp();
app.listen(3000);
app.use((req,res,next)=>{
    console.log("Hi,I am middleware");
    console.log(req.path);
    console.log(req.host);
    next();
})
app.get('/',(req,res)=>{
    res.sendFile('./docs/index.html',{root:__dirname});
})
app.get('/home',(req,res)=>{
    res.redirect('/');
})
app.get('/about',(req,res)=>{
    res.sendFile('./docs/abot.html',{root:__dirname});
})
app.use((req,res)=>{
    res.sendFile('./docs/404.html',{root:__dirname});
})

