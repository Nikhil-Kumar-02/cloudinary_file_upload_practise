const express = require('express');
const router = express.Router();
const {localfileUpload , imageUpload} = require('../controller/fileupload');


router.post('/localfileUpload' , localfileUpload);
router.post('/imageUpload' , imageUpload);


module.exports = router;