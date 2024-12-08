const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const booksRoutes = require('./routes/booksRoutes');
const membersRoutes = require('./routes/membersRoutes');
const staffRoutes = require('./routes/staffRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/books', booksRoutes);
app.use('/members', membersRoutes);
app.use('/staff', staffRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});

// Database connection and server start
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error('Database connection error:', err));
