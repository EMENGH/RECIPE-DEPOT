const express = require("express");
const User = require("../models/user");
const Recipe = require("../models/recipe");
const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
});

router.post("/", (req, res) => {
  const newUser = new User();
  newUser.user = req.body.user;
  newUser.recipes = []

  Category.find().then((recipes) => {
    for (var i = 0; i < 6; i ++){
      const randomNumber = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomNumber];
      newUser.recipes.push(randomRecipe);
    }
    return newUser.save();
  }).then((user) => {
    return res.json(user);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  })
})

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {points: req.body.points}).then((user) =>{
    res.json(user);
  })
});

module.exports = router;