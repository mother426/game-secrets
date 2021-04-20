const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
  {
    name: "John",
    email: "john@email.com",
    password: "rootroot",
  },
  {
    name: "Brandon",
    email: "brandon@email.com",
    password: "rootroot",
  },
  {
    name: "Dylan",
    email: "dylan@email.com",
    password: "rootroot",
  },
  {
    name: "Taylor",
    email: "taylor@email.com",
    password: "rootroot",
  },
];

db.User.remove({})
  .then(async () => {
    for (let user of userSeed) {
      await db.User.create(user);
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });