const fs=require('fs');
// if(!fs.existsSync('./docs')){
//     fs.mkdir('./docs',(err)=>{
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log("File Created Successfully");
//         }
//     }
//     )
// }
// fs.writeFile('./docs/file.txt',"HI,sai",(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("File Created Successfully");
//     }
// })
// if(fs.existsSync('./docs/file.txt')){
//     fs.readFile('./docs/file.txt',(err,data)=>{
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log(data.toString());
//         }
//     })
// }
// if(fs.existsSync('./docs/file.txt')){
//     fs.appendFile('./docs/file.txt',"Inbasree here",(err)=>{
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log("File Updated Successfully");
//         }
//     })
// }
if(fs.existsSync('./docs/file.txt')){
    fs.unlink('./docs/file.txt',(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("File Deleted Successfully");
        }
    });
}
else{
    console.log("File does not exists");
}