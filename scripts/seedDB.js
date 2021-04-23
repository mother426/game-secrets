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
]
const postSeed = [
  {
    title: "post seed 1",
    author: "John",
    body: "sdfdsfdsfsdfsdfsdfdsfsdfsdf",
    date: "2021-05-02",
  },
  {
    title: "post seed 2",
    author: "Brandon",
    body: "aertiuhsadjklfkoajsdfo",
    date: "1994-07-01",
  },
  {
    title: "post seed 3",
    author: "Dylan",
    body: "aertiuhsadjklfkoajsdfo",
    date: "2001-06-04",
  },
  {
    title: "post seed 4",
    author: "Taylor",
    body: "aertiuhsadjklfkoajsdfo",
    date: "2012-01-01",
  },
];

db.User.remove({})
  .then(async () => {
    await db.Post.remove({});
    for (let i=0; i < userSeed.length; i++) {
      const user = await db.User.create(userSeed[i]);
      await db.Post.create({...postSeed[i], user: user._id})
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// db.Post.remove({})
//   .then(async () => {
//     for (let post of postSeed) {
//       await db.Post.create(post);
//     }
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
