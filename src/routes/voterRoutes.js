import express from "express";
import {
  deleteVoterById,
  updateVoterByVoterId,
  updateVoterById,
  postVoter,
  getVoterByVoterId,
  getVoterById,
  getVoters,
  postManyVoter
} from "../controllers/voterController.js";

const router = express.Router();
// GET all voter
router.get("/get/", getVoters);

// GET a single voter by ID
router.get("/get/:id", getVoterById);

//GET A SINGLE VOTER BY VOTERID

router.get("/get/byVoterId/:voterId", getVoterByVoterId);

// POST a new voter
router.post("/post/", postVoter);

router.post("/post/postMany/", postVoter);

// PUT to update a voter by ID

router.put("/put/updateById/:id", updateVoterById);

// PUT to update a voter by VOTERID

router.put("/put/updateByVoterId/:voterId", updateVoterByVoterId);

// // DELETE a product by ID
router.delete("/delete/deleteByVoterId/:id", deleteVoterById);

// export{router};
export default router;
