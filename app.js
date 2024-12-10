const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./routes/booksRoutes');
const membersRouter = require('./routes/membersRoutes');
const staffRouter = require('./routes/staffRoutes');
const app = express();
const port = process.env.PORT || 3001; // Changed port to 3001

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://tamiawilliams0618:ooEbj4oNA3XTDhbc@cluster0.mongodb.net/digital-library?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Database connection error:', err));

// Use routes
app.use('/books', booksRouter);
app.use('/members', membersRouter);
app.use('/staff', staffRouter);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});