const fs = require("fs");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")

const session = require("express-session");

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true, 
  resave: false, 
  cookie: {
    httpOnly: true,
    maxAge: parseInt(process.env.SESSION_MAX_AGE)
  }
}));

app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app
app.use(routes);
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  const dir = path.join(__dirname, 'tmp/');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, 0744);
});

