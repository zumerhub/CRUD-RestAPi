
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process on connection error
    });

module.exports = mongoose;
