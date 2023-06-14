const http = require('http');

const  server=http.createServer((req,res)=>{
// console.log(req.url, req.method, req.headers);
const url=req.url;
if(url==='/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>FORM</title></head>')
    res.write("<body><label>Input Message</label><form action='/home' method='POST'><input type='text' name='message'></input><button type='submit'> Send</button></form></body>")
    res.write('</html>')
    res.end()
}
if(url==='/home'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>HOME</title></head>')
    res.write("<body><h1>Welcome to Home Page</h1></body>")
    res.write('</html>')
    res.end()
}
if(url==='/about'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>ABOUT</title></head>')
    res.write("<body><h1>Welcome to About Us page</h1></body>")
    res.write('</html>')
    res.end()
}
if(url==='/node'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Node JS</title></head>')
    res.write("<body><h1>First Node JS Project</h1></body>")
    res.write('</html>')
    res.end()
}

});
server.listen(3000);