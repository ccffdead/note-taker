//global config

const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const notesData = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Add API Route

app.get("/api/notes", (req, res) => {
  res.json(notesData.slice(1));
});

//Notes API Route

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Index API Routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Add func to establish new note

//function addnewNote(body, array) {
//const newNote = body;
