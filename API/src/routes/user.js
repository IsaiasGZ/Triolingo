const express = require("express");
const userSchema = require("../models/user");
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";

//create user
router.post("/register", async (req, res) => {
    const { name, age, email, contra, username } = req.body;
    console.log(req.body);
  
    const oldUser = await userSchema.findOne({ email: email });
  
    if(oldUser) {
      return res.send({ data: "User already exists!!" });
    }
    const encryptedPassword = await bcrypt.hash(contra, 10);
  
    try {
      await user.create({
        name: name,
        age: age,
        email: email,
        contra: encryptedPassword,
        username: username
      });
      res.send({ status: "ok", data: "User Created" });
    } catch (error) {
      res.send({ status: "error 404", data: error });
    }
  });

  //login users 
  router.post("/login-user", async (req, res) => {
    const { email, contra } = req.body;
    console.log(req.body);
    const oldUser = await userSchema.findOne({ email: email });
  
    if (!oldUser) {
      return res.send({ data: "Email doesn't exists!!" });
    }
    
    if (await bcrypt.compare(contra, oldUser.contra)) {
      console.log("holaa");
      const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
      console.log(token);
      if (res.status(201)) {
        return res.send({
          status: "ok",
          data: token,
        });
      } else {
        return res.send({ error: "error" });
      }
    }
  });

//get all users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//find a user
router.get("/users/:name", (req, res) => {
    const { name } = req.params;
    userSchema
        .find({"name": name})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

router.post("/users", async (req, res) =>{
    const { email, contra } = req.body;
    const oldUser = await userSchema.findOne({email: email});
    
    if(!oldUser){
        return res.send({data: "user doesnt exist!"})
    };
    if(oldUser){
        return res.send({data: "user exist!"})
    }
})

//update a user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email} = req.body;
    userSchema
        .updateOne({_id: id}, { $set: {name, age, email} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;