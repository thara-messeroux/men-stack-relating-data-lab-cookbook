// controllers/recipes.js

// Controller: Waiter: Takes orders and tells the kitchen what to do

// Import the Recipe model so we can interact with the database

// The waiter who takes orders and tells the kitchen what to do

// Import express
const express = require("express");

// Create a router
const router = express.Router();

// Import Recipe model
const Recipe = require("../models/recipe");

// INDEX ROUTE
// Displays all recipes
router.get("/", async (req, res) => {

    // Get all recipes from MongoDB
    const recipes = await Recipe.find().populate("ingredients");


    // Send recipes to the view
    res.render("recipes/index", { recipes });

});

router.get("/new", (req, res) => {
    res.render("recipes/new.ejs");
});

router.post("/", async (req, res) => {
    await Recipe.create(req.body);
    res.redirect("/recipes");
});

router.get("/:recipeId", async (req, res) => {

    const recipe = await Recipe.findById(req.params.recipeId)
        .populate("ingredients");

    res.render("recipes/show.ejs", { recipe });

});

// Export router so server.js can use it
module.exports = router;