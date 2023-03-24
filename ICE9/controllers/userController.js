const { getSWAPI } = require("../helpers/apiCalls");

const homeView = (req, res) => {
    const pageTitle = 'Home';
    const homeContent = 'This is the homepage. Welcome!';
    res.render('home', {
        pageTitle: pageTitle,
        homeContent: homeContent
    });
};

const planetView = async (req, res) => {
    const planets_url = 'https://swapi.dev/api/planets/';
    let full_planets_data = await getSWAPI(planets_url);
    // console.log(full_planets_data['results']);
    planets_data = full_planets_data['results'];
    res.render('planets',
    {planets_data: planets_data}
    );
};

module.exports = {
    homeView,
    planetView
};