const homeView = (req, res) => {
    const pageTitle = 'Home';
    const homeContent = 'This is the homepage. Welcome!';
    res.render('home', {
        pageTitle: pageTitle,
        homeContent: homeContent
    });
};

module.exports = {
    homeView
};