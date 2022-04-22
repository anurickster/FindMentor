const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator');

const ContactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: [isEmail, 'Please enter valid email'],
    },
    phone: {
      type: Number,
      required: true,
    },
    message:{
        type:String
    }
})


const ContactedUser = mongoose.model('ContactedUser', ContactSchema);

module.exports=ContactedUser
