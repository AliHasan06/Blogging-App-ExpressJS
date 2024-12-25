const express = require("express");
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let user = await usermodel.create({
    username: "ali",
    age: 18,
    email: "ali@example.com",
  });
  res.send(user);
});

app.listen(3000, () => {
  // console.log('Example app listening on port 3000!');
});
