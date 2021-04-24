const db = require('../models');

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
        console.log("here")
        try {
            const newPost = await db.Post.create({
                title: req.body.title,
                body: req.body.body,
                author: req.body.author,
                date: req.body.date
            })
            //TODO: save the image to the data base, as a part of the post as a URL string
            // console.log(newPost._id, req.session.user_id);
            // push images into users posts below?
            db.User.findOneAndUpdate({_id: req.session.user_id }, {$push:{posts: newPost._id}}, {new: true})
            .then(() => res.sendStatus(200));
        } catch (err) {
            console.log(err, "this is an error");
            res.sendStatus(500).json(err);
          }
    },
    
    
}