// models/recipe.js

// Model: Kitchen: Stores and prepares the food

// This file defines the Recipe model, which represents a recipe in our database

// The recipe book that defines how food is stored in our database

// Import mongoose so we can define schemas
const mongoose = require("mongoose");

// Schema: blueprint for recipe documents
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    cookTime: Number,

    instructions: String,

    // Relationship: recipes reference ingredients
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ingredient"
        }
    ]
});

// Create model from schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export model so controllers can access database
module.exports = Recipe;