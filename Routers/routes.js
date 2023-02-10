const express = require('express');
const details = require("../details")
const router = express.Router();

router.get("/", (req,res)=>{
    res.render('home',{
        aboutDetail: details.about
    })
})

router.get('/home',(req,res)=>{
    res.render('home',{
        aboutDetail: details.about
    })
})

router.get("/contact", (req,res)=>{
    res.render('contact');
})

module.exports = router;