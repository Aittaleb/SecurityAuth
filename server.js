const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');

const User = require('./models/user')

var app = express();

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    
    user.save().then(() => {
        //the user variable is the same as the one declared up above (memory and value)
        return user.generateAuthToken();
      
    }).then((token) => {
        //the user variable here is not the same since we just added a token to the tokens arrays
        res.header(x-auth,token).send(user);
    })
    .catch((e) => {
        res.status(400).send(e)
    });

});

app.listen(3000, () => {
    console.log('server is up on 3000');
})