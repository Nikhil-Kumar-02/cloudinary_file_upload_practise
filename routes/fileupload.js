const express = require('express');
const router = express.Router();
const {localfileUpload , imageUpload , videoUpload} = require('../controller/fileupload');


router.post('/localfileUpload' , localfileUpload);
router.post('/imageUpload' , imageUpload);
router.post('/videoUpload' , videoUpload);


module.exports = router;