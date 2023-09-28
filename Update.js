const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017/library"; // Replace with your MongoDB URL

// Create a MongoClient instance
const client = new MongoClient(url);

// Connect to MongoDB and update documents
async function updateDocuments() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Specify the database and collection
    const db = client.db("library"); 
    const collection = db.collection("books"); 

    // Define the filter criteria for the documents to update
    const filter = { author: "Author 2" }; // Example: Update documents with author "Author 1"

    // Define the update operation
    const updateOperation = {
      $set: { year: 2024 } // Example: Set the "year" field to 2024
    };

    // Update the documents that match the filter
    const result = await collection.updateMany(filter, updateOperation);

    // Output the result
    console.log(`Updated ${result.modifiedCount} documents.`);
  } catch (err) {
    console.error("Error updating documents:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to update documents
updateDocuments();
