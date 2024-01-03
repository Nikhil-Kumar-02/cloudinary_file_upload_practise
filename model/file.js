const {Schema,model} = require("mongoose");
const mongoose = require('mongoose');

const MySchema = new Schema({
name: {
    type: String,
    required: true,
},
imageUrl : {
    type : String
},
tags : {
    type : String
},
email : {
    type : String
}
});

module.exports = model("file", MySchema)
  