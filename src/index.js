import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./db/dbDb.js";
// import Voter from "./models/voterModels.js";
import { Voter } from './models/voterModels.js'; // Use named import

import app from "./app.js";

// const VoterRoute = require('../routes/voterRoute.js');
import VoterRoute from './routes/voterRoutes.js'

dotenv.config({
    path: './.env'
})// neet to make change in package.json in script not changed yet


app.use('/api/voter',VoterRoute);



// app.get('/api/voter/get',async (req,res)=>{
//     try {
//       const  voters = await Voter.find({});
//       res.status(200).json(voters);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }

// });


// app.get('/api/voter/get/:id', async (req,res)=>{
//      console.log(req.body);
//     try {
//         const { id } = req.params;
//        const voter = await  Voter.findById(id);
//        if(!voter){
//         return res.status(404).json({message: "voter not found"});
//        }
//        res.status(200).json(voter);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });



// app.get('/api/voter/get/voterId', async (req, res) => {
//     try {
//         const voterId = Number(req.params.voterId);
      
//         if (isNaN(voterId)) {
//             return res.status(400).json({ message: "Invalid voter ID format" });
//         }
        
//         const voter = await Voter.findOne({ voterId: voterId });
//         if (!voter) {
//             return res.status(404).json({ message: "Voter not found" });
//         }
        
//         res.status(200).json(voter);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });




// app.post('/api/voter/post',async (req,res)=>{
//     console.log('Request Body:', req.body)
//     try {
//       const voters = await Voter.create(req.body);
//       res.status(200).json(voters);
//     } catch (error) {
//       res.status(500).json({message: error.message});
//     }
// });

// app.put('/api/voter/put/:id',async(req,res)=>{
     
//     try {
//         const voter = await Voter.findByIdAndUpdate(id);
//        res.status(200).json(voter);

//        if(!voter){
//           res.status(404).json({message: "Voter not found"});
//        }
//           res.status(200).json(voter);

//     } catch (error) {
//         res.status(200).json({message: error.message});
//     }

// });


// app.put(('/api/voter/put/voterId'), async (req,res)=>{
    
//      try {
//         //  const {id} = req.params
//          const voterId = Number(req.params.voterId);
//          const voter = await Voter.findOne({ voterId: voterId});
//          if(!voter){
//             res.status(404).json({message:"Voter not found"});
//          }
//            re.status(200).json(voter);
//      } catch (error) {
//         res.status(500).json({message: error.message});
//      }
// })




 connectDB().then(()=>{

    app.on("error",(error)=>{
        console.log("ERRR: ", error);
        throw error
})
    
    app.listen(process.env.PORT || 800, ()=>{
        console.log(`Server is running at port: ${process.env.PORT || 800}`);

    })
 })
.catch((err)=>{

    console.log("MONGO DB connection failed !!! ", err);

})
























// (async ()=>{

// try {

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    
//     app.on("error",(error)=>{
//         console.log("ERRR: ", error);
//         throw error       
//     })

//     app.listen(process.env.PORT,()=>{
           
//         console.log('App is listening on port $ {process.env.PORT}');

// })
    
// } catch (error) {
//     console.Console.log("ERROR: ", error)
//     throw err;
// }
// })()




















