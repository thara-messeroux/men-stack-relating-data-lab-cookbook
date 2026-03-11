## Concept: Referencing Data

MongoDB relates data using two approaches:

Embedding → store data inside a document

Referencing → store ObjectIds that point to other documents

This lab focuses on referencing.

Example:

Recipe document

{
  name: "Pizza",
  ingredients: [ObjectId("123"), ObjectId("456")]
}

We later use `populate()` to replace these IDs with real ingredient documents.

Engineering patterns used:
- CRUD (Create Read Update Delete)
- MVC (Model View Controller)
- Separation of concerns

### Step 3 🐙 — Created Recipe model

What we did
Created the Recipe schema and model.

Why we did it
The model defines what a recipe document looks like in MongoDB.

Engineering concept
Schema = blueprint for documents.

Architecture used
MVC
Model = database structure.


