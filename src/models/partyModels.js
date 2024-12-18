import mongoose from "mongoose";

const partySchema= new mongoose.Schema({
     
    name:{
        type: String,
        enum:["BJP","INC","APP","OTHER"],
        required: true,
        unique: true,
    },

    symbol:{
        type: String,
        required: true,
        unique: true,
    }
});


export const Party = mongoose.model("Party", partySchema);