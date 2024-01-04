const File = require('../model/file')

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

module.exports = localfileUpload;