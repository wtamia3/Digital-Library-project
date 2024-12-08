const Book = require("../models/bookModel");

/**
 * Creates a new book.
 * @param {Object} req - The HTTP request object containing book details in req.body.
 * @param {Object} res - The HTTP response object.
 */
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to create book", details: error.message });
  }
};

/**
 * Retrieves a book by ID.
 * @param {Object} req - The HTTP request object containing book ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve book", details: error.message });
  }
};

/**
 * Updates a book's details.
 * @param {Object} req - The HTTP request object containing updates in req.body and book ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book", details: error.message });
  }
};

/**
 * Deletes a book.
 * @param {Object} req - The HTTP request object containing book ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book", details: error.message });
  }
};

/**
 * Lists all books.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.listAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to list books", details: error.message });
  }
};
