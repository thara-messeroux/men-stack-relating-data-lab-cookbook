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
    const recipes = await Recipe.find();

    // Send recipes to the view
    res.render("recipes/index", { recipes });

});

router.get("/new", (req, res) => {
    res.render("recipes/new.ejs");
});

// Export router so server.js can use it
module.exports = router;