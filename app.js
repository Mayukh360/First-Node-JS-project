const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>FORM</title></head>");
    res.write(
      "<body><label>Input Message</label><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'> Send</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("Message.html", message)
      res.statusCode = 302;
        res.setHeader("Location", "/display");
        res.end();
      
    });
  }
  if (url === "/display") {
    fs.readFile("Message.html", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error occurred while reading the file.");
        } else {
          res.setHeader("Content-Type", "text/html");
          res.write("<html>");
          res.write("<head><title>Display</title></head>");
          res.write("<body>");
          res.write("<h1>Displaying Message</h1>");
          res.write("<p>" + data + "</p>");
          res.write("</body>");
          res.write("</html>");
          res.end();
        }
      });
  }

  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>HOME</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>ABOUT</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node JS</title></head>");
    res.write("<body><h1>First Node JS Project</h1></body>");
    res.write("</html>");
    res.end();
  }
});
server.listen(3000);
