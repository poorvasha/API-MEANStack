const express = require('express');

// Router() which use to handle the routes.
const router = express.Router();

// IMP ==== which has dbschema and moongoose functionalities.
const Post = require('../models/Post');

// routes
// get request for getting data.
router.get('/', async (req, res) => {

    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json( {message: err} );
    }
    
}); 

// post request - that the user wants to insert some data.
router.post('/', async (req, res) => {

    // user entered data and here we are getting the data and storing in post varible
    const post = new Post({
        title: req.body.title,
        description: req.body.description

    });
    
    try{
        // to save the data in DB and then to display.
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json( { message: err } )
    }
    
}); 



// Export
module.exports = router;