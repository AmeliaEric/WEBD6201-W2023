// Require the Express module
const express = require('express');

// Require various functions from animalController.js
const { homeView, formView, formSubmission, getAllAnimals, editAnimals, updateAnimals, deleteAnimals} = require('../controllers/animalController');

// Create a new router object with Express
const router = express.Router();

// Define routes for the various animal-related functions
router.get('/', homeView);
router.get('/animals/entry-form', formView);
router.post('/animals/entry-form', formSubmission);
router.get('/animals/all-animals', getAllAnimals);
router.get('/animals/edit-animal/:id', editAnimals);
router.post('/animals/edit-animal/:id', updateAnimals);
router.post('/animals/delete-animal/:id', deleteAnimals);

// Export the router object
module.exports = router;
