// Requirements
const express = require('express')
const ejs = require('ejs')
const myRoutes = require('./Routers/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 3000;

// Mongo DB Connection
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://saumyavatsa2108:DZ9Bib4GKzqlVMvI@portfoliodb.iolobby.mongodb.net/portfolioDB", {useNewUrlParser: true});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',myRoutes);
app.use(cors())


app.listen(port,()=>{
    console.log("Server is listening on " + port);
})