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

//get travelPlace by areaId

router.get("/travel-place-by-area-id/:areaId",async (request:Request,respons:Response,next:NextFunction)=>{
    try {
        const areaId = +request.params.areaId
        const travelPlace = await travelPlaceLogic.getPlaceByAreaId(areaId)
        respons.json(travelPlace)
    } 
    catch (error) {
        next(error)        
    }
})

export default router