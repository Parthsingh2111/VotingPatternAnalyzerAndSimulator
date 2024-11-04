import express from "express";

import {
    getStates,
    getStateByName,
    postState
} from "../controllers/stateController.js";

const router = express.Router();

router.post("/post/", postState);

router.get("/get/", getStates);

router.get("/get/ByName/:name", getStateByName);

// POST a new Candidate
// router.post("/post/", addParty);

// router.delete("/delete/ByPartyId/:id",deletePartyById);


export default router;