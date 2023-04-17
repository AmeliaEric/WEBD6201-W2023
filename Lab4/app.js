const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config({ path: './process.env'});

const DB_CONN_STR = process.env.MONGO_CONN_STR.replace('<PASS>', process.env.MONGO_PASS);
mongoose.connect(DB_CONN_STR, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log("Database Connection Successful!"))
    .catch((err) => console.log(`DB Connection ERROR: ${err}`));

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

// for forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Used for Paring URL-encoded bodies

//ROUTES
app.use('/', require('./routes/animal'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});