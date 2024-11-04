import express from "express";

import {
addParty,getParties,getPartiesByName,deletePartyById
} from "../controllers/partyController.js";

const router = express.Router();

router.get("/get/", getParties);

router.get("/get/ByName/:name", getPartiesByName);

// POST a new Candidate
router.post("/post/", addParty);

router.delete("/delete/ByPartyId/:id",deletePartyById);


export default router;