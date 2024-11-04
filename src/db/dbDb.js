import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"
const connectDB = async () => {
  
  try {
    // console.log("MONGODB_URI:", process.env.MONGODB_URI);
    // console.log("DB_NAME:", DB_NAME);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `/n Mongo connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { DB_NAME } from "../constants.js";

// dotenv.config(); // Ensure environment variables are loaded

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log(
//       `\nMongo connected! DB HOST: ${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("MONGODB CONNECTION ERROR: ", error);
//     process.exit(1);
//   }
// };

// export default connectDB;
