import express from "express";

import {
    getRegions,
    getRegionByName
} from "../controllers/regionController.js";

const router = express.Router();

router.get("/get/", getRegions);

router.get("/get/ByName/:name", getRegionByName);

// POST a new Candidate
// router.post("/post/", addParty);

// router.delete("/delete/ByPartyId/:id",deletePartyById);


export default router;