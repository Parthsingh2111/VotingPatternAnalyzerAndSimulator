// import dotenv from "dotenv";
// import connectDb from "./dbDb.js"; 
// import mongoose from "mongoose";
// import { Voter } from "../models/voterModels.js"; 

// dotenv.config({ path: "./.env" });

// const migrateFields = async () => {
//   try {
//     await connectDb();

//     // Perform migration
//     const result = await Voter.updateMany(
//       {},
//       [
//         { 
//           $set: {
//             dateOfBirth: "$DOB",            // Rename DOB to dateOfBirth
//             voterIdProof: "$VoterIdProof",  // Rename VoterIdProof to voterIdProof
//             seat: {
//               $cond: {
//                 if: { $regexMatch: { input: "$seat", regex: /^[0-9a-f]{24}$/ } }, // Check if seat is a valid ObjectId
//                 then: { $toObjectId: "$seat" }, // Convert to ObjectId if valid
//                 else: null // Set to null or handle as needed
//               }
//             }
//           },
//         },
//         {
//           $unset: ["DOB", "VoterIdProof"], // Remove old fields
//         },
//       ]
//     );

//     console.log(`Migration successful: ${result.modifiedCount} records updated.`);

//     // Debugging: Check if the new fields exist
//     const updatedRecords = await Voter.find({
//       $or: [
//         { dateOfBirth: { $exists: true } },
//         { voterIdProof: { $exists: true } },
//       ],
//     });

//     console.log("Records with new fields:", updatedRecords);
//     console.log("Number of records found with new fields:", updatedRecords.length);

//   } catch (error) {
//     console.error("Migration failed:", error);
//   } finally {
//     await mongoose.connection.close(); // Close the connection
//   }
// };

// migrateFields();




// // import dotenv from "dotenv";
// // import connectDb from "./dbDb.js"; 
// // import mongoose from "mongoose";
// // import { Voter } from "../models/voterModels.js"; 

// // dotenv.config({ path: "./.env" });

// // const migrateFields = async () => {
// //   try {
// //     await connectDb();

// //     // Perform migration
// //     const result = await Voter.updateMany(
// //       {},
// //       [
// //         { 
// //           $set: {
// //             dateOfBirth: "$DOB",            // Rename DOB to dateOfBirth
// //             voterIdProof: "$VoterIdProof",  // Rename VoterIdProof to voterIdProof
// //             seat: { $toObjectId: "$seat" }  // Convert seat to ObjectId if referencing District
// //           },
// //         },
// //         {
// //           $unset: ["DOB", "VoterIdProof"], // Remove old fields
// //         },
// //       ]
// //     );

// //     console.log(`Migration successful: ${result.modifiedCount} records updated.`);

// //     // Debugging: Check if the new fields exist
// //     const updatedRecords = await Voter.find({
// //       $or: [
// //         { dateOfBirth: { $exists: true } },
// //         { voterIdProof: { $exists: true } },
// //       ],
// //     });

// //     console.log("Records with new fields:", updatedRecords);
// //     console.log("Number of records found with new fields:", updatedRecords.length);

// //   } catch (error) {
// //     console.error("Migration failed:", error);
// //   } finally {
// //     // Close the connection if needed
// //     await mongoose.connection.close(); // Uncomment to close connection
// //   }
// // };

// // migrateFields();








// // import dotenv from "dotenv";
// // import connectDb from "./dbDb.js"; 
// // import mongoose from "mongoose";
// // import { Voter } from "../models/voterModels.js"; 
// // dotenv.config({ path: "./.env" });
// // const migrateFields = async () => {
// //   try {
// //     await connectDb();
// //     // Perform migration
// //     const result = await Voter.updateMany({}, [
// //       { 
// //         $set: {
// //           dateOfBirth: "$DOB",           // Rename DOB to dateOfBirth
// //           voterIdProof: "$VoterIdProof",  // Rename VoterIdProof to voterIdProof
// //           seat: { $toObjectId: "$seat" }, // Convert seat to ObjectId if referencing District
// //         },
// //       },
// //       {
// //         $unset: ["DOB", "VoterIdProof"], // Remove old fields
// //       },
// //     ]);

// //     console.log(`Migration successful: ${result.modifiedCount} records updated.`);

// //     // Debugging: Check if the new fields exist
// //     const updatedRecords = await Voter.find({ $or: [{ dateOfBirth: { $exists: true } }, { voterIdProof: { $exists: true } }] });
// //     console.log("Records with new fields:", updatedRecords);
// //     console.log("Number of records found with new fields:", updatedRecords.length);

// //   } catch (error) {
// //     console.error("Migration failed:", error);
// //   } finally {
// //     // Close the connection if needed
// //     // await mongoose.connection.close();
// //   }
// // };

// // migrateFields();
