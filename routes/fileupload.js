const express = require('express');
const router = express.Router();
const localfileUpload = require('../controller/fileupload');


router.post('/localfileUpload' , localfileUpload);


module.exports = router;