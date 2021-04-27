const db = require('../models');
const { uploadToCloudinary } = require("./upload");
const path = require("path");
const { unlinkSync } = require('fs');
// make sure session is logged in with every api call
module.exports = {
    findAll: function(req, res) {
        db.Post.find(req.query)
            .sort({ date: 1 })
            .then(postModel => res.json(postModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Post.findById(req.params.id)
            .then(postModel => res.json(postModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Post.create(req.body)
            .then(postModel => res.json(postModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Post.findById({ _id: req.params.id })
            .then(postModel => postModel.remove())
            .then(postModel => res.json(postModel))
            .catch(err => res.status(422).json(err));
    },
    findByTitle: function(req, res) {
        //only matches EXACT title, use regex to match a LIKE query string and return results
        //{'$regex' : '', '$options' : 'i'}
        console.log(req.body);
        db.Post.find({title: {'$regex' : `${req.body.title}`, '$options' : 'i'}}).populate('user')
            .then(postModel => {
                console.log(postModel)
                res.json(postModel)
            })
            .catch(err => res.status(422).json(err));
    },
    createPost: async function (req, res) {
        console.log("IAMGE: ", req.body)
        try {
            const newPost = await db.Post.create({
                title: req.body.title,
                body: req.body.body,
                author: req.body.author,
                date: req.body.date,
                image:  req.body.image
            })
            db.User.findOneAndUpdate({_id: req.session.user_id }, {$push:{posts: newPost._id}}, {new: true})
            .then(() => res.sendStatus(200));
        } catch (err) {
            console.log(err, "this is an error");
            res.sendStatus(500).json(err);
          }
    },
    uploadImage: async function (req, res) {
        try {
            const result = await uploadToCloudinary(req.file.path, {folder: 'gameSecrets'});
            if (req.file) unlinkSync(req.file.path);
            res.json(result.public_id);
        } catch (err) {
            console.log(err);
            res.sendStatus(500).json(err);
        }
    },
    postComment: async function (req, res) {
        try {
            const result = await db.Comment.create({
                content: req.body.content
            })
            console.log(req.params.id)
            // findoneandupdate a post where the _id matches THIS posts _id
            db.Post.findOneAndUpdate({_id: req.body._id}, {$push:{comments: result._id}}, {new: true})
        } catch (err) {
            console.log(err);
            res.sendStatus(500).json(err);
        }
    } 
}