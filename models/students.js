const mongoose = require('mongoose');
const validator = require('validator');
const StudentSchema = new mongoose.Schema({

    name:{
        type:String,
        minlength:4,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validator(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        minlength:2,
        required:true,
        
    },
    contact:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true

    },
    address:{
        type:String,
        required:true
    }

});
const Student = new mongoose.model('Student', StudentSchema);
module.exports=Student;