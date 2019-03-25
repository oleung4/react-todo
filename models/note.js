const mongoose = require("mongoose");

// the structure of our collection
let noteSchema = new mongoose.Schema({
  content: String,
  completed: Boolean
});

let Note = mongoose.model("Note", noteSchema); // mongoose will create default collection name 'notes'

module.exports = Note;
