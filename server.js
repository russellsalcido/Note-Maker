// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Sets up the Express app to handle data parsing -MID
app.use("/api", apiroutes);
app.use("/", htmlroutes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});