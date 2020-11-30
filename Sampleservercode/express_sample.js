const express=require('express')
const app=express()
const path=require('path')
/*
app.use((req,res,next)=>{
    console.log("Hello")
    next()
})
*/
app.get('/signup',(req,res,)=>{
   
    res.sendFile(path.join(__dirname,'signup.html'))
})
/*
app.use((req,res,next)=>{
    console.log("End....")
    next()
})
*/
app.post('/signup',(req,res)=>{
    res.send("Data geted")
    console.log(req.body.name)
    
})
app.get('/about',(req,res)=>{
    res.send("Hello About Page")
})
app.listen(7000,()=>{
    console.log("Server started......")
console.log(__dirname)
console.log(__filename)
})