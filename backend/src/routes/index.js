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
  res.status(200).json({ token });
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

// router.get("/Products",(req,res)=>{
//     res.json([{
//         _id
//     }])
// })

module.exports = router;
