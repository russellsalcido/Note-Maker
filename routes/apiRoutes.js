// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const fs = require("fs");
const path = require("path");

const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const filePath = path.join(__dirname, "../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

router.get("/api/notes", function (req, res) {
  res.sendFile(filePath);
});

router.post("/api/notes", function (req, res) {
  const noteId = { ...req.body, id: uuidv4() };
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(noteId);

    fs.writeFile(filePath, JSON.stringify(notes), function (err) {
      if (err) throw err;
      res.json(true);
    });
  });
});

router.delete("/api/notes/:id", function (req, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const savedNotes = notes.filter((item) => item.id !== req.params.id);
    fs.writeFile(
      filePath,
      JSON.stringify(savedNotes, null, 2),
      (err) => {
        if (err) throw err;
        res.send(req.body);
      }
    );
  });
});

module.exports = router;
