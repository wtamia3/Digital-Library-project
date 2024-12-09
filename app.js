const express = require('express');
const mongoose = require('mongoose');
const app = express();
const booksRouter = require('./routes/booksRoutes');
const membersRouter = require('./routes/membersRoutes');
const staffRouter = require('./routes/staffRoutes');

// Connection string for MongoDB Atlas
const mongoURI = 'mongodb+srv://tamiawilliams0618:ooEbj4oNA3XTDhbc@cluster0.mongodb.net/digital-library?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.use(express.json());
app.use('/books', booksRouter);
app.use('/members', membersRouter);
app.use('/staff', staffRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
