const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');  // This path should match where your controller file is located

// Define routes for books
router.post('/', bookController.createBook);
router.get('/', bookController.listAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
