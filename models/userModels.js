const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your Username"],
    },
    email:{
        type:String,
        required:[true,"Please enter your Email"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter your Password"]
    },
    likedn:{
        type:String,
        
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    pin:{
        type:String
    },
    check:{
        type:Boolean
    }
})


module.exports = mongoose.model("User",userSchema);