import { Voter } from "../models/voterModels.js";

const getVoters = async (req, res) => {
  try {
    const voters = await Voter.find({});
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVoterById = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const voter = await Voter.findById(id);
    if (!voter) {
      return res.status(404).json({ message: "voter not found" });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVoterByVoterId = async (req, res) => {
  try {
    const voterId = Number(req.params.voterId);

    if (isNaN(voterId)) {
      return res.status(400).json({ message: "Invalid voter ID format" });
    }

    const voter = await Voter.findOne({ voterId: voterId });
    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }

    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postVoter = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const voters = await Voter.create(req.body);
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postManyVoter = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    // Ensure that req.body is an array
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Invalid input format. Expected an array of voters." });
    }

    // Create voters in bulk
    const voters = await Voter.insertMany(req.body);
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVoterById = async (req, res) => {
  try {
    const { id } = req.params;
    const voter = await Voter.findByIdAndUpdate(id, req.body, { new: true });
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const updateVoterByVoterId = async (req, res) => {
  try {
    //  const {id} = req.params
    const voterId = Number(req.params.voterId);
    const voter = await Voter.findOne({ voterId: voterId }, req.body, {
      new: true,
    });
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVoterById = async (req, res) => {
  try {
    const { id } = req.params;
    const voter = await Voter.findByIdAndDelete(id);
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
    }
    res.status(200).json({ message: "Voter deleted successfully" });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};



export {
  deleteVoterById,
  updateVoterByVoterId,
  updateVoterById,  
  postVoter,
  getVoterByVoterId,
  getVoterById,
  getVoters,
  postManyVoter,
};
