const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// tackling cors policy 😢  $ npm i cors
const cors = require("cors");
app.use(
  cors({
    origin : "*",     // allow from any origin
    methods : "*",  // allowed methods
    credentials: true
  })
)
const Note = require('./dbConnect/db')

// routes 
app.get("/", async(req, res)=>{
    const notes = await Note.find();
    res.send(notes);
})

app.post("/", async(req, res)=>{
    try {
        const {title, subtitle, body} = req.body;
        const newNote = new Note({
            title : title,
            subtitle : subtitle,
            body : body,
        })
        const saveNote = await newNote.save();
        res.json(saveNote)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/", async (req, res)=>{
    let reqNoteId = req.body.noteId
    Note.findByIdAndDelete(reqNoteId, (err, blog) => {
        if (err) {
            console.log(err);
          } else {
            // console.log("blog " + blog.title + "is deleted !!");
            res.send("delted successfully")
          }
    })
    
})

app.listen(3001, () => {
    console.log("server started at server 3001");
  });
  