// Requirements
const express = require('express')
const ejs = require('ejs')

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render('body')
})

app.listen(port,()=>{
    console.log("Server is listening on " + port);
})