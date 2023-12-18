import express from "express";
import { creatingRoom } from "../controller/index.js";

const router=express.Router();

router.post("/",async(req,res)=>{
    try {
        if(Object.keys(req.body).length<=0){
            return res.status(400).json({error:"Check request body"});
        }
        const data=req.body;
        const newRoom=await creatingRoom(data);
        if(!newRoom.acknowledged){
            return res.status(400).json({error:"error in adding data"});
        }
        res.status(201).json({data:newRoom});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        })
    }
});


export const BookingRouter=router;