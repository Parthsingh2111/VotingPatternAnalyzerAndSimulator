import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/dbDb.js";
import { Voter } from "./models/voterModels.js"; // Use named import

import app from "./app.js";

import VoterRoute from "./routes/voterRoutes.js";

dotenv.config({
  path: "./.env",
}); // neet to make change in package.json in script not changed yet

app.use("/api/voter", VoterRoute);

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 800, () => {
      console.log(`Server is running at port: ${process.env.PORT || 800}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
