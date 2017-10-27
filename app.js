const bodyParser = require("body-parser");
const app = require('express')();
const PORT = process.env.PORT || 10010
const router = require('./src/messageboard.js')
module.exports = app;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", router.index)
app.post("/message", router.message)
app.listen(PORT);