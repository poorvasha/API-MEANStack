const express = require('express');

// Router() which use to handle the routes.
const router = express.Router();

// IMP ==== model.
const Post = require('../models/Post');




// get request for getting all data.
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
    
    try {
        // to save the data in DB and then to display.
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json( { message: err } );
    }
    
}); 


// to get data using id
router.get('/:postId', async (req,res) => {
    
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch{
        res.json( { message: err} );
    }

});


// to delete item using its id;
router.delete('/:postId', async (req, res) => {

    try {
        const removePost = await Post.remove( {_id: req.params.postId} );
        res.json(removePost);
    } catch{
        res.json( {message: err} );
    }

});

// to update item using id
router.patch('/:postId', async ( req, res) => {

    try {
        const updatePost = await Post.updateOne( 
            { _id: req.params.postId }, 
            { $set : {title: req.body.title} } 
        );
        res.json( {updatePost} );

    } catch (err) {
        res.json( {message: err} );
    }

});


// Export
module.exports = router;