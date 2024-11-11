
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String
})
const contactData = mongoose.model("contact", Schema)
module.exports = contactData;