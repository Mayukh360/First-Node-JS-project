
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use('/', (req,res,next)=>{
//     console.log('This will always run')
//    next()
// })

app.use(bodyParser.urlencoded({extended:false}))
app.use("/add-product", (req, res, next) => {
  res.send('<form method="POST" action="/product" ><label>Product</label><input type="text" name="title"/><label>Size</label><input type="text" name="size"/><button type="submit">Add Product</button></form>');
});
app.post("/product", (req, res, next) => {
  console.log(req.body)
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
