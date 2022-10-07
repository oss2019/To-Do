const mongoose = require("mongoose");
const url = process.env.DATABASE_URI;
mongoose.connect(url, {useNewUrlParser: true})

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  body: {
    type: String,
  },
});

const Notes = mongoose.model("Notes", NotesSchema);
module.exports = Notes;
