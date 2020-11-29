var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function (req,res)
{
    var q=url.parse(req.url,true)
    //console.log(q.pathname)
    if(q.pathname==='/')
    {
    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
} else if(q.pathname==='/signup')
{
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
}else if(q.pathname==='/signupaction')
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>"+q.query.name+"</h1>")
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
