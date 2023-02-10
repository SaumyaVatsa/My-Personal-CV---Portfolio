// Requirements
const express = require('express')
const ejs = require('ejs')
const myRoutes = require('./Routers/routes')

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use('/',myRoutes);

// command

app.listen(port,()=>{
    console.log("Server is listening on " + port);
})