const express=require('express')
const app=express()
const path=require('path')

app.get('/',function (req,res){
    res.send("Hello")
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})
app.listen(7000,()=>{
    console.log("Server started......")
console.log(__dirname)
console.log(__filename)
})