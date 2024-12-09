const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Create a new book
router.post('/', booksController.createBook);

// Get all books
router.get('/', booksController.getAllBooks);

// Get a specific book by ID
router.get('/:id', booksController.getBookById);

// Update a book by ID
router.put('/:id', booksController.updateBookById);

// Delete a book by ID
router.delete('/:id', booksController.deleteBookById);

module.exports = router;