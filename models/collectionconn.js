const mongoose=require('mongoose')
const validator=require('validator')


const contactschema=new mongoose.Schema({

    name:{
        type:String,
        // required:true
    },

    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    message:{
        type:String,
        // required:true
    },
})

const contact=new mongoose.model('contact',contactschema)

module.exports=contact