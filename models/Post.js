const mongoose = require('mongoose');

// schema for collections
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        Default: Date.now
    }
});


module.exports = mongoose.model('Posts', PostSchema)