const express = require('express');
const router = express.Router();
const {localfileUpload , imageUpload , videoUpload , croppedImage} = require('../controller/fileupload');


router.post('/localfileUpload' , localfileUpload);
router.post('/imageUpload' , imageUpload);
router.post('/videoUpload' , videoUpload);
router.post('/croppedImage' , croppedImage);


module.exports = router;