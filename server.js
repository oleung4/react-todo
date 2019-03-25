const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// note model
const Note = require("./models/note");

// initialize our app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = "mongodb://localhost/todoList";

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

/////////////////////////////////////////////////

app.get("/test", (req, res) => res.json({ msg: "all good" }));

// @route   GET /api
// @desc    Get all posts
app.get("/api", (req, res) => {
  Note.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nonotesfound: "No notes found" }));
});

// @route   POST /api
// @desc    Create post
app.post("/api", (req, res) => {
  const newNote = new Note({
    // with react, we are going to pull these from the state
    content: req.body.content,
    completed: false
  });
  newNote.save().then(note => res.json(note));
});

// @route   DELETE api/:id
// @desc    Delete post
app.delete("/api/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      // Delete
      note.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ notenotfound: "Note not found" }));
});

/////////////////////////////////////////////////

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
