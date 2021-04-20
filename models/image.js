const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
