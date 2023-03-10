// Requirements
const express = require('express')
const ejs = require('ejs')
const myRoutes = require('./Routers/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();
console.log(process.env)

const app = express();
const port = process.env.PORT || 3000;

// Mongo DB Connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',myRoutes);
app.use(cors({
    origin: ["https://saumyavatsa.onrender.com/", "https://localhost:3000"]
}))


app.listen(port,()=>{
    console.log("Server is listening on " + port);
})