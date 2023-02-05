// Requirements
const express = require('express')
const ejs = require('ejs')
const details = require("./details")

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render('body',{
        aboutDetail: details.about
    })
})

app.get("/contact", (req,res)=>{
    res.send("This is my contact page");
})

app.listen(port,()=>{
    console.log("Server is listening on " + port);
})