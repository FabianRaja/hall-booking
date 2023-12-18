import express from "express";
import { getAllRoom } from "../controller/index.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const data=await getAllRoom();
        res.status(201).json({data:data});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        })
    }
})

export default router;