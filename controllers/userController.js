const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.User.find(req.query)
            .sort({ date: -1 })
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User.findById(req.params.id)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User.create(req.body)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User.findById({ _id: req.params.id })
            .then(userModel => userModel.remove())
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    login: async function(req, res) {
        const user = await db.User.findOne({ email: req.body.email });
        console.log(user);
        user.comparePassword(req.body.password, (err, match) => {
            if (err) return res.status(422).json(err);
            return res.json(match);
        });
    }
}