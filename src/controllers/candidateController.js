import {Candidate} from  "../models/candidateModels.js"

const postCandidate  = async (req,res)=>{
      console.log("Request Body:", req.body);
      try {
        const candidate =  await Candidate.create(req.body)
        res.status(200).json(candidate);

      } catch (error) {
        console.log("Error While Adding candidate",error),
        res.status(500).json({message: error.message});
      }
}

const postManyCandidate = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    // Ensure that req.body is an array
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Invalid input format. Expected an array of candidates." });
    }

    // Create candidate in bulk
    const candidate = await Candidate.insertMany(req.body);
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getCandidates = async (req, res) => {
    try {
      const Candidates = await Candidate.find({});
      res.status(200).json(Candidates);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const getCandidateById = async (req, res) => {
    try {
      const { id } = req.params
      const Candidate = await Candidate.findone(id);
      if(!Candidate){
         res.status(404).json({message: "Candidate Not found"});
      }
      res.status(200).json(Candidate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  
  const getCandidateByName = async (req, res) => {
    try {
      const candidateName = req.body
      const CandidateData = await Candidate.find({name: candidateName});
      if(!CandidateData){
         res.status(404).json({message: "Candidate Not found"});
      }
      res.status(200).json(CandidateData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export {

    postCandidate,
    getCandidates,
    getCandidateById,
    getCandidateByName,
    postManyCandidate
  };