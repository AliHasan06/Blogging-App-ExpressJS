const express = require("express");
const app = express();
const usermodel = require("./models/user");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { email, password, name, username, age } = req.body;
  let user = await usermodel.findOne({ email, password, name, username, age });
  if (user) {
    return res.status(500).send("User already registered");

  

  }
});

app.listen(3000, () => {});
