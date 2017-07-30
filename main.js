const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const expressSession = require("express-session")
const bodyParser = require("body-parser")

app.engine("mst", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mst")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(3000, () => {
  console.log("hey good lookin")
})
