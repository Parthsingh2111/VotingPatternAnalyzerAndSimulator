import express from "express"
import {getDistrictIdByName,getDistricts} from "../controllers/districtController.js";
const router = express.Router();

router.get("/get/:name", getDistrictIdByName);
router.get("/get/", getDistricts);
export default router;