import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },

  voterId: {
    type: Number,
    required: true,
    unique: true,
  },

  voterIdProof: {
    type: String,
    required: true,
  },

  seat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
    required: true,
  },

  category: {
    type: String,
    enum: ["general", "obc", "scst", "minority"],
    required: true,
  },

  income: {
    type: Number,
    required: true,
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },

  firstTimeVoter: {
    type: Boolean,
    default: false,
    required: true,
  },

  partyVoting: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Party",
    required : true,
  },

  happyAbout:{
    type: String,
    enum:["Performance","Social Harmony","Economic Polices","Candidate","Development","Global Impact","Top Leadership"],
    required : true,
  },

  unhappyAbout:{
    type: String,
    enum:["Performance","Social Harmony","Economic Polices","Candidate","Development","Global Impact","Top Leadership","correption"],
    required : true,
  },
},
{
  timestamps: true
}


);

export const Voter = mongoose.model("Voter", voterSchema);
