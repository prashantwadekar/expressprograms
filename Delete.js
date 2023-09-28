const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017/library"; // Replace with your MongoDB URL

// Create a MongoClient instance
const client = new MongoClient(url);

// Connect to MongoDB and delete documents
async function deleteDocuments() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Specify the database and collection
    const db = client.db("library"); // Replace with your database name
    const collection = db.collection("books"); // Replace with your collection name

    // Define the filter criteria for deletion
    const filter = { author: "Author 1" }; // Example: Delete documents with author "Author 1"

    // Delete the documents that match the filter
    const result = await collection.deleteMany(filter);

    // Output the result
    console.log(`Deleted ${result.deletedCount} documents.`);
  } catch (err) {
    console.error("Error deleting documents:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to delete documents
deleteDocuments();


