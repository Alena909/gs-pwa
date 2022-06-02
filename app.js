const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
