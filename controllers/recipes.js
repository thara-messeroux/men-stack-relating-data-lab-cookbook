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
    res.render("recipes/index");
});

// Export router so server.js can use it
module.exports = router;