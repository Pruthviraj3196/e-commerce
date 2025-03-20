const mongoose = require("mongoose");

const user = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String
    }
})

const userModel = new mongoose.model("user", user);

module.exports = userModel;