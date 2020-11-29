var http=require('http')
http.createServer(function (req,res)
{
    res.write("Test Server")
    res.end()
}).listen(7001)
