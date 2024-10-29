import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
    required: true,
  },
});

export const Candidate = mongoose.model("Candidate", candidateSchema);
