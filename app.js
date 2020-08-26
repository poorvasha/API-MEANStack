// IMP ==== Express which is flexible for handling request and responses 
const express = require('express');

// express returns a http server for us
const app = express();

// IMP ==== mongoose module for accessing and retriving flexibility
const mongoose = require('mongoose');

// IMP ==== dotenv to hide database username and passed
require('dotenv/config');

// IMP ==== routes
const postsRoute  = require('./routes/posts');

// IMP ==== to convert the request body into json
const bodyParser = require('body-parser');

// converting body to json which then only can identify by js.
app.use(bodyParser.json());


// routes

// middleware function which passes req to the POSTS route
app.use('/posts', postsRoute);


app.get('/', (req, res) => {
    res.send('Home Page');
}); 







// connection to database
mongoose.connect( process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to database')
);

// start listening to the http serve
app.listen(3000, () => {
    console.log("Server is running!");
  });