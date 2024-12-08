const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, enum: ["Fiction", "Non-Fiction"], required: true },
  publicationDate: { type: Date },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Book", bookSchema);
