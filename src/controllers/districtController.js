import { District } from '../models/stateModels.js'

const getDistrictIdByName = async (req, res) => {
    try{
        const districtName = req.body;
        const districtData = await District.find({ name: districtName })
        res.status(200).json(districtData._id);
    } catch (err){
        console.log("Error while getting district id", err);
        res.status(500).send({ message: `Error while getting district id: ${err}` })
    }
}

const getDistricts = async (req, res) => {
    try{
        const districts = await District.find({})
        res.status(200).json(districts);
    } catch (err){
        console.log("Error while getting districts: ", err);
        res.status(500).send({ message: `Error while getting districs: ${err}` })
    }
}

export {getDistrictIdByName,getDistricts}


