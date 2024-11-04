import dotenv from "dotenv";
dotenv.config({
  "path": "./src/.env"
}); // need to make change in package.json in script not changed yet

import mongoose from "mongoose";
import connectDB from "./db/dbDb.js";
import { Voter } from "./models/voterModels.js"; 
import { Party } from "./models/partyModels.js";
import { District,Region,State} from "./models/stateModels.js";
import {Candidate} from "./models/candidateModels.js"
import app from "./app.js";
import VoterRoute from "./routes/voterRoutes.js";
import PartyPoute from "./routes/partyRoutes.js";
import DistrictRoute from "./routes/districtRoutes.js"
import RegionRoute from "./routes/regionRoutes.js"
import StateRoute from "./routes/stateRoutes.js"
import CandidateRoute from "./routes/candidateRoute.js"


app.use("/api/voter", VoterRoute);
app.use("/api/party",PartyPoute);
app.use("/api/district",DistrictRoute);
app.use("/api/region",RegionRoute);
app.use("/api/state",StateRoute);
app.use("/api/Candidate",CandidateRoute);




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
