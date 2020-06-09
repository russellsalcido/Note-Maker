//NPM
const express = require("express");

// Sets up the Express App
// =============================================================

const app = express();
var PORTONE = process.env.PORTONE || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./public/assets/js/apiRoutes")(app);
require("./public/assets/js/htmlRoutes")(app);

app.listen(PORTONE, function () {
	// Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:" + PORTONE);
});
