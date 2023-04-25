import express, { NextFunction, Request, Response } from "express"
import travelPlaceLogic from "../5-logic/travel-place-logic"

const router = express.Router()
//get all area
router.get("/area",async (request:Request,respons:Response,next:NextFunction)=>{
    try {
        const area = await travelPlaceLogic.getAllArea()
        respons.json(area)
    } 
    catch (error) {
        next(error)        
    }
})

export default router