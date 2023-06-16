
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactRoute=require('./routes/contact')
const successRoute=require('./routes/success')
const path=require('path')


app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes);

app.use(shopRoutes);
app.use(contactRoute);
app.use(successRoute)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000);
