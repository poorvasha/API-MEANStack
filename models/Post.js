const mongoose = require('mongoose');

// schema for particular collection
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

// exports model
module.exports = mongoose.model('Posts', PostSchema)