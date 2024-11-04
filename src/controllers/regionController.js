import {Region} from  "../models/stateModels.js"

// const postCandidate  = async (req,res)=>{
//       console.log("Request Body:", req.body);
//       try {
//         const candidate =  await Candidate.create(req.body)
//         res.status(200).json(candidate);

//       } catch (error) {
//         console.log("Error While Adding candidate",error),
//         res.status(500).json({message: error.message});
//       }
// }





const getRegions = async (req, res) => {
    try {
      const Regions = await Region.find({});
      res.status(200).json(Regions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


//   const getCandidateById = async (req, res) => {
//     try {
//       const { id } = req.params
//       const Candidate = await Candidate.findone(id);
//       if(!Candidate){
//          res.status(404).json({message: "Candidate Not found"});
//       }
//       res.status(200).json(Candidate);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };


  
  const getRegionByName = async (req, res) => {
    try {
      const regionName = req.body
      const regionData = await Region.find({name: regionName});
      if(!regionData){
         res.status(404).json({message: "region Not found"});
      }
      res.status(200).json(regionData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export {

//     postCandidate,
getRegions,
getRegionByName
//     getCandidateById,


  }