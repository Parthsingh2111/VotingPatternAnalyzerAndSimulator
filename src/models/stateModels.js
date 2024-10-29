import mongoose from "mongoose";

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  // totalPopulation:{
  //     type: Number,
  //     required: true,
  // },

  // generalCategoryPopulation:{
  //     type: Number,
  //     required: true,
  // },

  // obcCategoryPopulation:{
  //     type: Number,
  //     required: true,
  // },

  // scstCategoryPopulation:{
  //     type: Number,
  //     required: true,
  // },

  // minorityCategoryPopulation:{
  //     type: Number,
  //     required: true,
  // },
});

const regionSchema = new mongoose.Schema({
  name: {
    type: string,
    enum: ["North", "South", "East", "West"],
    required: true,
  },
  districts: [districtSchema],
});

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  regions: [regionSchema],
});

export const State = mongoose.model("State", stateSchema);
