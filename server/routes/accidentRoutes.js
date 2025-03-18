const express = require('express');
const { handleAccident  } = require('../controllers/accidentController');

const router = express.Router();

router.post('/analyze', handleAccident);   

module.exports = router;
