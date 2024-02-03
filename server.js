//Deps
const express = require("express")
const cors = require("cors")

//JSONs
const projects = require("./projects.json")
const about = require("./about.json")

//App Object
const app = express()

//Middleware
app.use(cors())

//home route
app.get("/", (req, res) => {
    res.send("Suhhh, dude")
})

//route retrieving projects
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects)
})

//route retrieving about
app.get("/about", (req, res) => {
    res.json(about)
})

//declare port
const PORT = process.env.PORT || 4000

//turn it on
app.listen(PORT, () => console.log(`Port not starboard at ${PORT}`))