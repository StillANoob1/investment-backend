const express = require("express");
const User = require("../models/userModels");
const router = express.Router();


router.post("/register",async(req,res)=>{
    try {
        const newUser = new User({
            ...req.body
        });

        const user = await newUser.save();
        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
})

router.post("/logout",async(req,res)=>{
    try {
     res.status(200).json({
         success:true,
         message:"user has been logout"
     })
    } catch (error) {
     res.status(500).json({
         success:false,
         message:error.message
     })
    }
 })

module.exports=router;