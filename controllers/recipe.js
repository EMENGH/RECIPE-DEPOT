const express = require("express");
const Recipe = require("../models/recipe");
const Review = require("../models/review");
const router = express.Router();

router.get("/", (req, res) => {
  Recipe.find().then((recipes) => {
    res.json(recipes);
  });
});


router.get("/:recipeCategory", (req, res) => {
    console.log('hello');
    // const Category = req.params.recipeCategory;
    // console.log(Category);

    // //get all recipes
    // Recipe.find({})
    //     .then((recipes) => {
    //         const recipeSelected = recipes.filter((recipe) => {
    //             console.log('found recipe: ' + recipe.categoryName)
    //             return recipe.title === cuisine
            

            
        // })
    })
    
    //filter by cuisine
 
    //return filters results



router.post("/", (req, res) => {
  const newRecipe = new Recipe();
  console.log(req.body);
  newRecipe.name = req.body.recipe.name;
  
  const newReviews = req.body.recipe.reviews.map((review) => {
    return new Review(review);
  });

  newRecipe.reviews = newReviews;

  newRecipe.save().then((recipe) => {
    res.json(recipe);
  }).catch(err => console.log(err));
})

module.exports = router;