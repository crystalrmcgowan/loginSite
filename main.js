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

const authenticate = (req, res, next) => {
  if (req.body.username === "get" && req.body.password === "there") {
    next()
  } else {
    res.redirect("/login")
  }
}

app.get("/login", (req, res) => {
  res.render("login")
})

app.use(authenticate)

app.post("/", (req, res) => {
  res.render("home", req.body)
})

app.listen(3000, (req, res) => {
  console.log("hey good lookin")
})
