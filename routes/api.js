var express = require('express');
var router = express.Router();

router.route('post')
    //return all posts
    .get(function(req, res){
        //temporary solution
        res.send({message: 'TODO return all posts'});
    })
    //post some data
    .post(function(req, res){
        //temporary solution
        res.send({message: 'TODO Create a new post'});
    });

module.exports = router;
