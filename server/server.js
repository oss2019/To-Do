const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// tackling cors policy 😢  $ npm i cors
const cors = require("cors");
app.use(
  cors({
    origin : "*",     // allow from any origin
    methods : ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],  // allowed methods
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

app.listen(3001, () => {
    console.log("server started at server 3001");
  });
  