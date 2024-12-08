const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  startDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Staff", staffSchema);
