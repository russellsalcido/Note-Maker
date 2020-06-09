// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const notes = require("../db/db.json");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
      tableData.push(req.body);
      res.json(true);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
