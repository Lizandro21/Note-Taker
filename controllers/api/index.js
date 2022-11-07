const router = require('express').Router();
const {createNote, updateNotes} = require("../../lib/notes");
const {notes} = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');

  //shows all the notes
  router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  })

    //router to post
    router.post("/notes", (req, res) => {
      req.body.id = uuidv4();
      const newNote = createNote(req.body, notes);
      res.json(newNote);
    })
    

    //router to delete
    router.delete("/notes/:id" , (req, res) => {
      const params = req.params.id
      updateNotes(params, notes);
      res.redirect('');
    })




  //exports api controllers
  module.exports = router;