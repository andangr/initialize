var express = require('express');
var router = express.Router();

router.route('/posts')
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

router.route('/posts/:id')
    //get specific post
    .get(function(req, res){
        //return post wirh id
        res.send({message: 'TODO return post with ID ' + req.params.id});
    })
    //update existing post
    .put(function(req, res){

        res.send({message: 'TODO modify post with ID ' + req.params.id});
    })
    //Delete existing post
    .delete(function(req, res){

        res.send({message: 'TODO delete post with ID ' + req.params.id});
    })
module.exports = router;
