// insert single record 
/*const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017/library"; // Replace with your MongoDB URL

// Create a MongoClient instance
const client = new MongoClient(url);

// Document to insert
const documentToInsert = {
  title: "Sample Book",
  author: "John Doe",
  year: 2023
};

// Connect to MongoDB and insert the document
async function insertDocument() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Specify the database and collection
    const db = client.db("library"); // Replace with your database name
    const collection = db.collection("books"); // Replace with your collection name

    // Insert the document
    const result = await collection.insertOne(documentToInsert);

    // Output the result
    console.log(`Inserted document with ID: ${result.insertedId}`);
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    // Close the connection
    client.close();
  }
}

// Call the insertDocument function to perform the insertion
insertDocument(); */
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017/library"; // Replace with your MongoDB URL

// Create a MongoClient instance
const client = new MongoClient(url);

// Documents to insert (an array of 10 records)
const documentsToInsert = [
  { title: "Book 1", author: "Author 1", year: 2023 },
  { title: "Book 2", author: "Author 2", year: 2023 },
  { title: "Book 3", author: "Author 3", year: 2023 },
  { title: "Book 4", author: "Author 4", year: 2023 },
  { title: "Book 5", author: "Author 5", year: 2023 },
  { title: "Book 6", author: "Author 6", year: 2023 },
  { title: "Book 7", author: "Author 7", year: 2023 },
  { title: "Book 8", author: "Author 8", year: 2023 },
  { title: "Book 9", author: "Author 9", year: 2023 },
  { title: "Book 10", author: "Author 10", year: 2023 }
];

// Connect to MongoDB and insert the documents
async function insertDocuments() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Specify the database and collection
    const db = client.db("library"); // Replace with your database name
    const collection = db.collection("books"); // Replace with your collection name

    // Insert the documents
    const result = await collection.insertMany(documentsToInsert);

    // Output the result
    console.log(`Inserted ${result.insertedCount} documents.`);
  } catch (err) {
    console.error("Error inserting documents:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to insert documents
insertDocuments();
