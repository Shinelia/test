require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const capsules = require("./routes/capsules");
const courses = require("./routes/courses");
const poi = require("./routes/poi");
const tags = require("./routes/tags");
const { backendPort } = require("./conf");

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/capsules", capsules);
app.use("/courses", courses);
app.use("/poi", poi);
app.use("/tags", tags);



app.listen(backendPort, (err) => {
  if (err) {
    console.log("Erreur serveur");
  } else {
    console.log(`API root available on http://localhost:${backendPort} test`);
  }
});

