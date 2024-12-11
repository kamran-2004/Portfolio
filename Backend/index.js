const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const Project = require('./models/Project')

const app = express() ;
app.use(cors());
app.use(express.json()) ;

mongoose.connect("mongodb://0.0.0.0:27017/ProjectInfo")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));



app.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/ProjectInfo", async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.json(project);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

app.listen(3001, () => {
    console.log("server is Running")
})


