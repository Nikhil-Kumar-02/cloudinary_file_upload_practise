const File = require('../model/file');
const cloudinary = require('cloudinary').v2;

const localfileUpload = async (req,res) => {
    try {
        const file = req.files.file;
        console.log("the file recieved " , file);
        //now form the recieved file extract the extention from it which is in name
        const extention = "." + file.name.split('.')[1];

        const path = __dirname + "/files/" + Date.now() + extention;
        console.log(path);

        file.mv(path , (err) => {
            console.log(err);
        })

        res.status(200).json({
            message : "file uploaded to server"
        })
    } catch (error) {
        console.log(error);
    }
}

async function uploadToCloudinary(file , folder){
    const options = {folder};
    console.log('printing the options  ' , folder);
    console.log('temp file path' , file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath , options);
}

function isFileTypeSupported(fileType , supportedType){
    return supportedType.includes(fileType);
}

const imageUpload = async (req,res) => {
    try {
        const {name , email , tags} = req.body;
        console.log(name,  email , tags);
        const file = req.files.image;
        console.log('the image sent is ' , file);

        const supportedType = ["jpg" , "jpeg" , "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log('the recieved file type ' , fileType);

        if(!isFileTypeSupported(fileType , supportedType)){
            res.status(400).json({
                message : "input type of file is not supported"
            })
        }

        //now we can upload to cloudinary
        console.log('temp file path' , file.tempFilePath);
        const response = await uploadToCloudinary(file , "testUpload");
        //'testUpload' this was the name of the folder on cloudinary where i want to upload the data to
        const dbResponse = await File.create({name , email , tags , imageUrl : response.secure_url})

        res.status(200).json({
            message : "sucessfully uploaded to cloudinary",
            data : response,
            databaseResponse : dbResponse
        })

        } catch (error) {
            res.status(300).status({
                err : error
            })
    }
}

module.exports = {
    localfileUpload , 
    imageUpload
};