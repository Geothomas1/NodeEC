const express=require('express')
const app=express()
app.get('/',function (req,res){
    res.send("Hello")
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.listen(7000,()=>console.log("Server started......"))