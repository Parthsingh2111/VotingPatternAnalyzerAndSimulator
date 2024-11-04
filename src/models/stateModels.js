
//Rather thanbeating entire document into one another in 
// hierarchical systemwe can send the reference id of
//  uppermodel to below model

import mongoose from "mongoose";

// District Schema
const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const District = mongoose.model("District", districtSchema);

// Region Schema
const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["North", "South", "East", "West"],
    required: true,
  },
  districts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
    }
  ],
});

const Region = mongoose.model("Region", regionSchema);

// State Schema
const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  regions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    }
  ],
});

const State = mongoose.model("State", stateSchema);

export { State, Region, District };


































// import mongoose from "mongoose";

// const districtSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   // totalPopulation:{
//   //     type: Number,
//   //     required: true,
//   // },

//   // generalCategoryPopulation:{
//   //     type: Number,
//   //     required: true,
//   // },

//   // obcCategoryPopulation:{
//   //     type: Number,
//   //     required: true,
//   // },

//   // scstCategoryPopulation:{
//   //     type: Number,
//   //     required: true,
//   // },

//   // minorityCategoryPopulation:{
//   //     type: Number,
//   //     required: true,
//   // },
// });

// const regionSchema = new mongoose.Schema({
//   name: {
//     type: string,
//     enum: ["North", "South", "East", "West"],
//     required: true,
//   },
//   districts: [districtSchema],
// });

// const stateSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   regions: [regionSchema],
// });

// export const State = mongoose.model("State", stateSchema);
