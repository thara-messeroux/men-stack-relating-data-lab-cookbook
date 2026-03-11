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