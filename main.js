const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const session = require("express-session")

app.engine("mst", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mst")

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(3000, () => {
  console.log("hey good lookin")
})
