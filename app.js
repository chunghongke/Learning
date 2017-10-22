const bodyParser = require("body-parser");
const app = require('express')();
const port = process.env.port || 10010
const router = require('./api/messageboard.js')
module.exports = app;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", router.index)
app.post("/message", router.message)
app.listen(port);