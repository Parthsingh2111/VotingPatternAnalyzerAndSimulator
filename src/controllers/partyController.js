// import mongoose from "mongoose"
// import express from "express"

import {Party} from "../models/partyModels.js"

const addParty = async (req,res)=>{
    console.log("Request Body:", req.body);
    try { 
     const  party = await Party.create(req.body);
      res.status(200).json(party);   
    } catch (error) {
        console.log("error while adding party to db: " , error);
        res.status(500).json({message: error.message});
    }
}


const getParties = async (req, res) => {
    try {
      const Parties = await Party.find({});
      res.status(200).json(Parties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const getPartiesByName = async (req, res) => {
    try {
      const name = (req.params.name);
      const party = await Party.findOne({ name: name });
      if (!party) {
        return res.status(404).json({ message: "party not found" });
      }
      res.status(200).json(party);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const  getPartyId = (req,res) =>{  
    try {
      const partyName = (req.params.name);
      const partid = Party.find({name: partyName})
      if(!partid){
        res.status(404).json({message: "partid Not found"});
     }
      res.status(200).send({ message: "partid Fetched Successfully.", data:  partid._id  })
    } catch (error) {
      console.log("Error while providing party id",error);
      res.status().json({message: error.message});
    }
  }

  const deletePartyById = async (req, res) => {
    try {
      const { id } = req.params;
      const party = await Party.findByIdAndDelete(id);
      if (!voter) {
        res.status(404).json({ message: "Party not found" });
      }
      res.status(200).json({ message: "Party deleted successfully" });
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  };

  export {addParty,getParties,getPartiesByName,deletePartyById};