const express = require('express');
const details = require("../details")
const Client = require('../models/contact')
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
    res.render('contact',{
        linkedInURL: details.linkedIn,
        instagramURL : details.instagram,
        githubURL: details.github,
        youtubeURL: details.youtube 
    });
})

router.post('/contact',(req,res)=>{
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const content = req.body.workRelated;

    const client = new Client({
        name: userName,
        email:userEmail,
        message: content
    })

    client.save((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Successfully Saved!");
        }
    })

    res.redirect('/contact')
})


module.exports = router;