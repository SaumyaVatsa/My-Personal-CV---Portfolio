// Requirements
const express = require('express')
const ejs = require('ejs')
const myRoutes = require('./Routers/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express();
const port = process.env.PORT || 3000;

// Mongo DB Connection
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://0.0.0.0:27017/portfolioDB", {useNewUrlParser: true});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',myRoutes);


app.listen(port,()=>{
    console.log("Server is listening on " + port);
})