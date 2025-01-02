// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/my_database", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error(err));

// // Routes
// const bookRoutes = require("./routes/bookRoutes");
// app.use("/api/books", bookRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// // const app = express();
// // app.use(bodyParser.json());
// // app.use(cors());

// // // MongoDB Connection
// // const dbName = "myDatabase"; // Replace with your database name
// // const dbURI = `mongodb://127.0.0.1:27017/${dbName}`; // Local MongoDB instance

// // mongoose
// //     .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log(`Connected to MongoDB database: ${dbName}`))
// //     .catch((err) => console.error("Failed to connect to MongoDB", err));

// // // Define a basic schema and model
// // const bookSchema = new mongoose.Schema({
// //     title: String,
// //     author: String,
// //     pages: Number,
// // });

// // const Book = mongoose.model('Book', bookSchema);

// // // API Endpoints
// // app.post('/add-book', async (req, res) => {
// //     try {
// //         const book = new Book(req.body);
// //         await book.save();
// //         res.status(201).send({ message: 'Book added successfully', book });
// //     } catch (error) {
// //         res.status(500).send({ message: 'Failed to add book', error });
// //     }
// // });

// // app.get('/books', async (req, res) => {
// //     try {
// //         const books = await Book.find();
// //         res.status(200).send(books);
// //     } catch (error) {
// //         res.status(500).send({ message: 'Failed to fetch books', error });
// //     }
// // });

// // // Start Server
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Schema and Model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
});

const Book = mongoose.model("Book", bookSchema);

// API Endpoints
app.post("/api/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send({ message: "Book added successfully", book });
  } catch (error) {
    res.status(500).send({ message: "Failed to add book", error });
  }
});

app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch books", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
