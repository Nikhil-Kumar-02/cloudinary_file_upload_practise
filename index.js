const express = require('express')
const app = express()
require('dotenv').config();
const connectDB = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary');

const PORT = process.env.PORT || 3000;

app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const fileUpload = require('express-fileupload');
app.use(fileUpload());  

const apiRoutes = require('./routes/fileupload');
app.use('/api/v1/upload' , apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
connectDB();
cloudinaryConnect.cloudinaryConnect();