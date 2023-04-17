const express = require('express');

const { homeView, formView, formSubmission, getAllAnimals, editAnimals, updateAnimals, deleteAnimals} = require('../controllers/animalController');

const router = express.Router();

router.get('/', homeView);

router.get('/animals/entry-form', formView);
router.post('/animals/entry-form', formSubmission);

router.get('/animals/all-animals', getAllAnimals);

router.get('/animals/edit-animal/:id', editAnimals);
router.post('/animals/edit-animal/:id', updateAnimals);

router.post('/delete-animal/:id', deleteAnimals);

module.exports = router;