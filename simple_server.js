const http=require('http')

const server=http.createServer((req,res)=>{
    res.end("<h1>Welcome to My Serve</h1>")
    res.writeHead(404,({
        'contect-type':'text/html'
    }))
    res.end("the page not find")
})

server.listen(3000,'localhost',()=>{
    console.log("HELLO THIS IS YOUR SERVER");
})