const express = require("express");
const app = express();
const usermodel = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

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

  // to check if someone is already registered
  if (user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt,async (err, hash) => {
 let user = await usermodel.create({
     email,
     password: hash,
     name,
     username,
     age
   })
    });
  });
});

app.listen(3000, () => {});
