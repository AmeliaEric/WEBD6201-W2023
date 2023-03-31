const homeView = (req, res) => {
    const pageTitle = 'Home Page';
    res.render('home', {
        pageTitle: pageTitle
    });
};

module.exports = {
    homeView,
};