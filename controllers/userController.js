const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((userModel) => userModel.remove())
      .then((userModel) => res.json(userModel))
      .catch((err) => res.status(422).json(err));
  },
  login: async function (req, res) {
    try {
      const user = await db.User.findOne({ email: req.body.email });
      console.log(user);
      console.log(req.session.cookie);
      user.comparePassword(req.body.password, (err, match) => {
        const userData = JSON.parse(JSON.stringify(user));
        req.session.user_id = userData._id
        const loggedInUser = {...userData};
        delete loggedInUser.password;
        if (err) return res.status(422).json(err);
        return res.json(loggedInUser);
      });
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
  logout: async function (req, res) {
    try {
      req.session.destroy();
      res.json(false);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  },
  signup: async function (req, res) {
    try {
      await db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

    } catch (err) {
      res.sendStatus(500).json(err);
    }
  }
};

