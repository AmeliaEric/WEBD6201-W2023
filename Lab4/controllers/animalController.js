// Require the Mongoose and Bcrypt modules.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Requires the Model Animal for the nav bar, header, and body and creating the animal from the model.
require('../model/Animal');
const Animal = mongoose.model('Animal');

/** This function renders the home page view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const homeView = (req, res) => {
    console.log('Index Page');
    const pageTitle = 'Home Page';
    // Sending the new information assigned to the rendered page.
    res.render('index', {
        pageTitle: pageTitle
    });
};

/** This function renders the animal registration form view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const formView = (req, res) => {
    const pageTitle = 'Registration Form';
    // Sending the new information assigned to the rendered page.
    res.render('animals/entry-form', {
        pageTitle: pageTitle
    });
};

/** This function handles the form submission and saves the animal data to the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const formSubmission = (req, res) => {
    console.log(req.body);
    const { Zoo, Scientific_Name, Common_Name, Given_Name, Gender, DOB, Age, isTransportable } = req.body;
    // Checks that the animal name does not already exist in the database as animal names are the identifying character for most animals in the zoo!
    Animal.findOne({ Given_Name: Given_Name }).then((animals) => {
        if (animals) {
            console.log("Found Animal! Animal Already Exists");
            const pageTitle = "Already Registered";
            message = "Your Animal are already registered.";
            // Sending the new information assigned to the rendered page.
            res.render("animals/entry-form", {
                pageTitle: pageTitle,
                alreadyRegistered: true,
                message: message,
            });
        } else {
            // Creates the new animal from the information from the form.
            const newAnimal = new Animal({
                Zoo,
                Scientific_Name,
                Common_Name,
                Given_Name,
                Gender,
                DOB,
                Age,
                isTransportable,
            });
            console.log("Hi I passed");
            // Saving and confirming to user that the animal now exists within the database.
            newAnimal
                .save()
                .then(() => {
                    const pageTitle = "New Animal Registered";
                    const registeredMessage = "Animal has just been registered";
                    // Sending the new information assigned to the rendered page.
                    res.render("animals/entry-form", {
                        pageTitle: pageTitle,
                        registeredMessage: registeredMessage,
                        alreadyRegistered: false,
                    });
                })
                // Catches any errors and displays them in the console.
                .catch((err) => console.log(err));
        }
    });
};

/** This function gets all the animals from the database and renders the animals list view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const getAllAnimals = (req, res) => {
    console.log('Animal List Page');
    // Finds all the animals in the database and loops through them.
    Animal.find()
        .lean()
        .then((animals) => {
            if(animals) {
                // Sending the new information assigned to the rendered page.
                res.render('animals/all-animals', {
                    pageTitle: 'Animals List',
                    animals: animals
                });
            }
    });
};

/** This function renders the edit animal form view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const editAnimals = (req, res) => {
    let id = req.params.id;
    console.log('edit-animal');
    // Looks through the animals based on a certain id passed in.
    Animal.findOne({_id: id})
        .lean()
        .then((animals) => {
            // Sending the new information assigned to the rendered page.
            res.render('animals/edit-animal', {
                animals: animals,
                id: id,
                pageTitle: 'Edit Animal'
            });
        });
};

/** This function updates the animal data in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const updateAnimals = async (req, res) => {
    // Takes in all the inputs from the edit form.
    const update = {Zoo: req.body.Zoo, 
        Scientific_Name: req.body.Scientific_Name, 
        Common_Name: req.body.Common_Name, 
        Given_Name: req.body.Given_Name,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        Age: req.body.Age,
        isTransportable: req.body.isTransportable};
    const id = req.params.id;
    const filter = {_id: id};
    // Updates the animal in the database and redirects to the animal list.
    let doc = await Animal.findOneAndUpdate(filter, update, {new: true});
    res.redirect('/animals/all-animals');
};

/** This function deletes the animal from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
*/
const deleteAnimals = async (req, res) => {
    console.log("Deleting!");
    const id = req.params.id;
    const filter = {_id: id};
    // Deletes the animal in the database and redirects to the animal list.
    let deletedCount = await Animal.deleteOne(filter);
    res.redirect('/animals/all-animals');
};

module.exports = {
    homeView,
    formView,
    formSubmission,
    getAllAnimals,
    editAnimals,
    updateAnimals,
    deleteAnimals
};