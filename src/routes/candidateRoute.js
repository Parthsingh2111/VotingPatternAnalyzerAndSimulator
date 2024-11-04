import express from "express";
import {
    postCandidate,
    getCandidates,
    getCandidateById,
    getCandidateByName,
    postManyCandidate
} from "../controllers/candidateController.js";
const router = express.Router();

router.get("/get/", getCandidates);

//GET A SINGLE CANDIDATE BY CANDIDATE ID
router.get("/get/:id", getCandidateById);

//GET A SINGLE CANDIDATE BY CANDIDATE NAME

router.get("/get/ByName/:candidateName", getCandidateByName);

// POST a new Candidate
router.post("/post/postMany/", postManyCandidate);

router.post("/post/", postCandidate);

export default router;
// return router;