/**
 * Name: Amelia Eric-Markovic
 * Date: April 19th, 2023
 * StudentID: 100818139
 */

// Importing required modules and packages
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: './process.env'});

// Replace database connection string password with actual password value
const DB_CONN_STR = process.env.MONGO_CONN_STR.replace('<PASS>', process.env.MONGO_PASS);
// Connect to MongoDB database using the connection string
mongoose.connect(DB_CONN_STR, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log("Database Connection Successful!"))
    .catch((err) => console.log(`DB Connection ERROR: ${err}`));

// Create express app
const app = express();

// Set up handlebars view engines
app.engine(
    '.hbs', 
    exphbs.engine({
        defaultLayout: 'main', 
        partialsDir: './views/partials', 
        extname: '.hbs'
    })
);
app.set('view engine', '.hbs');
app.set('views', './views');

// Set up middleware for parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Used for Paring URL-encoded bodies

// Set up routes
app.use('/', require('./routes/animal'));

// Start the express app and listen on the specified port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});