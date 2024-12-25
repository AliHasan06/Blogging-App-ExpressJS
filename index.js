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
app.get("/post/create", async (req, res) => {
  let post = await postmodel.create({
    postdata: "hello saare log kaise ho",
    user: "676c4e3ef9f05a623cb96ffb",
  });
  let user = await usermodel.findOne({ _id: "676c4e3ef9f05a623cb96ffb" });
  user.post.push(post._id);
  await user.save();
  res.send(post);
});

app.listen(3000, () => {});
