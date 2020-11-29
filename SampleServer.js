var http=require('http')
var fs=require('fs')

http.createServer(function (req,res)
{
    if(req.url==='/')
    {
    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
} else if(req.url==='/signup')
{
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
}else if(req.url==='/signupaction')
{
  
    res.write("From Data submitted")
    res.end()
}
else
{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write("Error")
    res.end()
}
}).listen(7003, ()=>
    console.log("Server start Running let start to do ...................")
)
