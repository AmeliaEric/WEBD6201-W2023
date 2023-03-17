//Adding the require statements as consts
const express = require('express')
const exphbs = require('express-handlebars')
//Adding the port number as a const
const PORT = 3000;

// create an express app
const app = express();

// Set up the Handlebars engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// express app.use()
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`)
    req.myName = 'Amelia'
    next()
})

// make the index route
app.get('/', (req, res) => {
    res.render('home');
});

// add about route
app.get('/about', (req, res) => {
    res.render('about');
});

// run server
app.listen (PORT, () => {
    console.log(`Server started on port ${PORT}`);
});