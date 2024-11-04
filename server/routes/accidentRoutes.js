const express = require('express');
const { handleAccident  } = require('../controllers/accidentController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/analyze', upload.single('image'), handleAccident);   

module.exports = router;
