// Requirements
const express = require('express')
const ejs = require('ejs')
const myRoutes = require('./Routers/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Mongo DB Connection
mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{
        console.log('Connected to Mongo Db Cloud');
    }
).catch((e)=>{
    console.log(e);
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',myRoutes);
app.use(cors({
    origin: ["https://saumyavatsa.netlify.app", "https://localhost:3000"]
}))


app.listen(port,()=>{
    console.log("Server is listening on " + port);
})