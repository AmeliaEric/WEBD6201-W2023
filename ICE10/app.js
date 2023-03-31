const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config({ path: './process.env'});

const app = express();

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

//ROUTES
app.use('/', require('./routes/user'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});