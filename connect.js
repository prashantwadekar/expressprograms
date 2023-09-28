const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://127.0.0.1:27017/library"; // Replace with your MongoDB server URL

console.log("Before connecting to MongoDB...");

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  console.log("Connected to MongoDB successfully...");
  // ...
});

console.log("After connecting to MongoDB...");
