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

Model → defines data
Controller → handles requests
View → displays pages

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

------------------------------------

### Step 5 🦁 — Created recipes index route

What we did
Created the GET /recipes route in the recipes controller.

Why we did it
This route will display the main recipes page.

Engineering concept
CRUD → Read operation.

The controller receives the request and renders a view.

------------------------------------

### Step 6 🦁 — Created recipes index view (EJS template)

What we did
Created the recipes folder and index.ejs view.

Why we did it
The controller renders this page when users visit /recipes.

Engineering concept
MVC architecture

Controller → chooses view
View → displays page

------------------------------------


### Step 7 🐝 — Connected Recipe model to controller

What we did
Imported the Recipe model into the recipes controller.

Why we did it
Controllers need the model to read and write data from MongoDB.

Engineering concept
MVC architecture.

Controller → asks Model
Model → talks to database

Analogy
Controller = person making the call
Model = phone number
Database = person answering

------------------------------------


### Step 8 🐝 — Reading recipes from database

What we did
Used `Recipe.find()` in the index route to retrieve all recipes.

Why we did it
The controller must fetch data from MongoDB before sending it to the view.

Engineering concept
CRUD pattern — Read operation.

Controller → Model → Database → Controller → View

------------------------------------

### Step 9 🐨 — Displayed recipes in the view

What we did
Used an EJS loop to display recipe names on the index page.

Why we did it
The controller sends recipes to the view, and the view must iterate through them.

Engineering concept
EJS templating and server-side rendering.

Controller → sends data
View → displays data

------------------------------------

### Step 10 🐼 — Configured Express view engine
What we did
Configured Express to use EJS as the view engine in server.js.

app.set('view engine', 'ejs');

Why we did it
Express must know which template engine renders views when res.render() is used.

Engineering concept
Server configuration + template engines.

Keyword
View Engine → system that renders dynamic HTML templates.

------------------------------------


