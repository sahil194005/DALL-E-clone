const express = require("express");
const cloudinary = require("cloudinary").v2;
const Post = require("../Models/post");
const router = express.Router();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.route("/").get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(201).json({success:true,data:posts})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:error})
    }
});
router.route("/").post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo:photoUrl.url,
        })
        res.status(201).json({success:true,data:newPost})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:error})
    }


});

module.exports = router;
