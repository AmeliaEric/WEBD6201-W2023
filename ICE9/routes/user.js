const express = require('express');

const { homeView, planetView } = require('../controllers/userController');

const router = express.Router();

router.get('/', homeView);
router.get('/planets', planetView);

module.exports = router;