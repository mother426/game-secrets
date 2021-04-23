const db = require('../models');

// make sure session is logged in with every api call
module.exports = {
    findAll: function(req, res) {
        db.Post.find(req.query)
            .sort({ date: -1 })
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
        console.log(req.body);
        db.Post.find({title: req.body.title}).populate('user')
            .then(postModel => {
                console.log(postModel)
                res.json(postModel)
            })
            .catch(err => res.status(422).json(err));
    },
    createPost: async function (req, res) {
        try {
            await db.Post.create({
                title: req.body.title,
                body: req.body.body,
                author: req.body.author,
                date: req.body.date
            })
        } catch (err) {
            res.sendStatus(500).json(err);
          }
    }
    
}