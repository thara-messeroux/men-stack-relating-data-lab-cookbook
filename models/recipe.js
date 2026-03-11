// models/recipe.js

// Model: Kitchen: Stores and prepares the food

// This file defines the Recipe model, which represents a recipe in our database

// The recipe book that defines how food is stored in our database

// Import mongoose so we can define schemas
const mongoose = require("mongoose");

// Create a schema (blueprint for recipes)
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cookTime: Number,
    instructions: String
});

// Create model from schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export the model so controllers can use it
module.exports = Recipe;