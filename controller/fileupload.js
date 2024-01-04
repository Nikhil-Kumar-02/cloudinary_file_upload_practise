const File = require('../model/file')

const localfileUpload = async (req,res) => {
    try {
        const file = req.files.file;
        console.log("the file recieved " , file);

        const path = __dirname + "/files" + Date.now();
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