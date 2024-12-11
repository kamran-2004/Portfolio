const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title : String,
    feature1 : String,
    feature2 : String
})

const Project = mongoose.model("Project", projectSchema)
module.exports = Project