const fs = require('fs');
const path = require('path');


//this is the function used to update and dlete my notes
function updateNotes(id, listofNotes) {
    const deletedNote = id;

    for (let i = 0; i < listofNotes.length; i++)
    {
      if (deletedNote === listofNotes[i].id) {
        listofNotes.splice(i, 1) 
        fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: listofNotes}, null, 2))
      }
    }
  }


//this is the function used to create my notes
  function createNote(body, listofNotes) {
    const newNote = body

    listofNotes.push(newNote)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"),

    JSON.stringify({notes: listofNotes}, null, 2)

    )

    return newNote
  }

//this is my exports of the lib
  module.exports = {
    updateNotes, createNote
  } 