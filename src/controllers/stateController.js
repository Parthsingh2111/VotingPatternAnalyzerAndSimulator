import {State} from  "../models/stateModels.js"

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





const getStates = async (req, res) => {
    try {
      const states = await State.find({});
      res.status(200).json(states);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const postState = async (req, res) => {
    try {
      const state = await State.create(req.body);
      res.status(200).json(state);
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


  
  const getStateByName = async (req, res) => {
    try {
      const stateName = req.body
      const stateData = await State.find({name: stateName});
      if(!stateData){
         res.status(404).json({message: "state Not found"});
      }
      res.status(200).json(stateData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export {

//     postCandidate,
postState,
getStates,
getStateByName
//     getCandidateById,


  }