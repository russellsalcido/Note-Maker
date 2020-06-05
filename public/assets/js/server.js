// Dependencies
// =============================================================
const express = require("express");
const http = require("http");

// Sets up the Express App
// =============================================================

const app = express();
const PORT = 7000;

const PORTONE = 7000;

function handleRequestOne(request, response) {
    response.end("To err is human, but to really foul things up you need a computer.");
  }

  const server = http.createServer(handleRequestOne);

  serverOne.listen(PORTONE, function() {

    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORTONE);
  });
