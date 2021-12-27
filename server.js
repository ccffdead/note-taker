//global config

const PORT = process.env.PORT || 5500;
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
let notesInfo = require("./db/db.json");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//API Routes

app.get("/api/notes", (req, res) => {
  let data = notesInfo;
  res.json(data);
});

app.post("/api/notes", (req, res) => {
  req.body.id = uuidv4();
  notesInfo.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(notesInfo, null, "/t"));
  res.json(notesInfo);
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

//Listening to Port

app.listen(PORT, () => {
  console.log(`Server is now live on port ${PORT}!`);
});
