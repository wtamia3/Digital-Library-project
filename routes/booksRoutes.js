const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');


router.post('/', booksController.createBook);
router.post('/batch', booksController.createMultipleBooks);

router.get('/single/:id', booksController.getBookById);
router.get('/batch', booksController.getAllBooks); 

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);

router.put('/:id', booksController.updateBookById);
router.delete('/:id', booksController.deleteBookById);

module.exports = router;