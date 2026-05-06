const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Handle multi-part form data (text + files)
router.post('/register', upload.fields([
    { name: 'idImage', maxCount: 1 },
    { name: 'selfie', maxCount: 1 },
    { name: 'diploma', maxCount: 1 },
    { name: 'license', maxCount: 1 }
]), authController.register);

module.exports = router;