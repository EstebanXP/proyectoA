const { Router } = require("express");
const jsonT = require("jsonwebtoken");
require("dotenv").config();
const router = Router();

const User = require("../models/User");

router.get("/", (req, res) => res.send("Hello world"));

router.post("/Signup", async (req, res) => {
  const { email, password, name, address } = req.body;
  const newUser = new User({ email, password, name, address });
  await newUser.save();
  const token = jsonT.sign({ _id: newUser._id }, process.env.Secret);
  return res.status(200).json({ token });
});

router.post("/Signin", (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    return res.status(401).send("The email doesn't exist");
  } else if (user.password !== password) {
    return res.status(401).send("Wrong password");
  }
  const token = jsonT.sign({ _id: user._id }, process.env.Secret);
  return res.status(200).json({ token });
});

router.get("/Products", verification, (req, res) => {
  res.json([
    {
      _id: "1",
      name: "producto 1",
      desc: "description 1",
      date: "22-01-2022",
    },
    {
      _id: "2",
      name: "producto 2",
      desc: "description 2",
      date: "22-01-2022",
    },
    {
      _id: "3",
      name: "producto 3",
      desc: "description 3",
      date: "22-01-2022",
    },
  ]);
});

module.exports = router;

function verification(req, resp, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Authorization denied");
  }
  const token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorize Request");
  }

  const data = jsonT.verify(token, process.env.Secret);

  req.userID = data._id;
  next();
}
