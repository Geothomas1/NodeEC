const express=require('express')
const app=express()
app.get('/',function (req,res){
    res.send("Hello")
})
app.get('/about',(req,res)=>{
    res.sendFile('signup.html')
})
app.listen(7000,()=>{
    console.log("Server started......")
console.log(__dirname)
})