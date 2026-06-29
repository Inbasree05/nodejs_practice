import express from "express";
const app=express();
const PORT=5000;
const users=[
    {id:1,name:"Sai"},
    {id:2,name:"Inba"},
    {id:3,name:"Rocky"}
]
app.get('/',(req,res)=>{
    res.send({msg:"Root"});
})
app.get('/api/users',(req,res)=>{
    res.send(users);
})
app.get('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).send({msg:"Invalid Id"});
    }
    const user=users.find((user)=>user.id===id);
    if(user){
        res.send(user);
    }else{
        return res.status(404).send({msg:"User not found"});
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});