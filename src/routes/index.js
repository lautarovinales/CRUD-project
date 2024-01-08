const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Ruta principal
router.get('/', mainController.home);

module.exports = router;