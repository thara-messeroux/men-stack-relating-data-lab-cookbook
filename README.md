# MEN Stack Relating Data Lab — Cookbook
Exercise: Referencing Related Data

This lab practices building a CRUD app using the MEN stack and learning how to relate data using MongoDB references.

Tech stack:
- MongoDB
- Express
- Node.js
- EJS
- Mongoose


------------------------------------

## Step Log (ADHD-friendly)

### Step 1 🐢 — Project setup and GitHub connection

What we did
- Initialized git repository
- Connected project to GitHub
- Created `.env`
- Installed dependencies

Why we did it
A clean project setup ensures the app runs consistently and version control tracks all progress.

Engineering concept
Reproducible setup + Git version control.

Keywords
- Repository → project history
- `.env` → secret configuration file


------------------------------------

### Step 2 🦉 — Understanding referencing vs embedding

What we learned
MongoDB relates data using two strategies:

Embedding → store related data inside the same document  
Referencing → store ObjectIds that point to other documents

Example referencing:

Recipe document

{
  name: "Pizza",
  ingredients: [ObjectId("123"), ObjectId("456")]
}

`populate()` later replaces those IDs with full documents.

Engineering concepts
- Database relationships
- CRUD pattern
- MVC architecture


------------------------------------

### Step 3 🐙 — Created recipes controller

What we did
Created the `controllers/recipes.js` file and initialized an Express router.

Why we did it
Controllers handle application logic and routes in MVC.

Engineering concept
MVC Architecture

Model → database structure  
Controller → request logic  
View → user interface


------------------------------------

### Step 4 🦊 — Connected recipes controller to server

What we did
Imported the recipes controller into `server.js` and mounted it using:

app.use("/recipes", recipesController)

Why we did it
This tells Express to send all `/recipes` requests to the recipes controller.

Engineering concept
Express routing layer.