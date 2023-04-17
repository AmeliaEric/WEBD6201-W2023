const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../model/Animal');
const Animal = mongoose.model('Animal');

const homeView = (req, res) => {
    console.log('Index Page');
    const pageTitle = 'Home Page';
    res.render('index', {
        pageTitle: pageTitle
    });
};

const formView = (req, res) => {
    const pageTitle = 'Registration Form';
    res.render('animals/entry-form', {
        pageTitle: pageTitle
    });
};

const formSubmission = (req, res) => {
    console.log(req.body);
    const { Zoo, Scientific_Name, Common_Name, Given_Name, Gender, DOB, Age, isTransportable } = req.body;

    Animal.findOne({ Given_Name: Given_Name }).then((animals) => {
        if (animals) {
            console.log("Found Animal! Animal Already Exists");
            const pageTitle = "Already Registered";
            message = "Your Animal are already registered.";
            res.render("entry-form", {
                pageTitle: pageTitle,
                alreadyRegistered: true,
                message: message,
            });
        } else {
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

            newAnimal
                .save()
                .then(() => {
                    const pageTitle = "New Animal Registered";
                    const registeredMessage = "Animal has just been registered";
                    res.render("entry-from", {
                        pageTitle: pageTitle,
                        registeredMessage: registeredMessage,
                        alreadyRegistered: false,
                    });
                })
                .catch((err) => console.log(err));
        }
    });
};


const getAllAnimals = (req, res) => {
    console.log('Animal List Page');
    Animal.find()
        .lean()
        .then((animals) => {
            if(animals) {
                res.render('animals/all-animals', {
                    pageTitle: 'Animals List',
                    animals: animals
                });
            }
    });
};
const editAnimals = (req, res) => {
    let id = req.params.id;
    console.log('edit-animal');
    Animal.findOne({_id: id})
        .lean()
        .then((animals) => {
            res.render('edit-animal', {
                animals: animals,
                id: id,
                pageTitle: 'Edit User'
            });
        });
};

const updateAnimals = async (req, res) => {
    const update = {fullName: req.body.fullName, email: req.body.email};
    const id = req.params.id;
    const filter = {_id: id};
    let doc = await Animal.findOneAndUpdate(filter, update, {new: true});
    res.redirect('/all-animals');
};

const deleteAnimals = async (req, res) => {
    console.log("Deleting!");
    const id = req.params.id;
    const filter = {_id: id};
    let deletedCount = await Animal.deleteOne(filter);
    res.redirect('/all-animals');
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