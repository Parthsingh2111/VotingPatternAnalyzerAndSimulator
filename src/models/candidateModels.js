import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({

   name:{
    type : String,
    required : true  
   },

   gender:{
    type : String,
    enum:["male","female","other"],
    required : true  
   },

   income:{
    type : Number,
    required : true  
   },

   category:{
      type:String,
      enum:["general","obc","sc/st","minority"],
      required : true,
  },

  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
    required: true,
  },
  
  seat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
    required: true,
  },


});

export const Candidate = mongoose.model("Candidate", candidateSchema);
