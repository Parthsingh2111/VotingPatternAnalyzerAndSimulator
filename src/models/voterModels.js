import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 
    fullName:{
        type: String,
        required:true,
       
    },

    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required:true,
             
    },

    voterId:{
        type: Number,
        required:true,
        unique: true,
    },

    VoterIdProof:{
        type : String,
        required: true,
        unique: true,
   },

    seat:{
        type: String,
        required:true,
    
    },

    category:{
        type: String,
        required:true,

    },

    income:{
        type: Number,
        required:true,
    },

    DOB:{
        type: Date,
        required: true,
    },

    firstTimeVoter:{
         type : Boolean,
         default:false,
         required: true,
    },

})

export const User  = mongoose.model("User", userSchema);