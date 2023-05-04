import express, { NextFunction, Request, Response } from "express"
import travelPlaceLogic from "../5-logic/travel-place-logic"
import TravelPlaceModel from "../4-models/travel-place-model"

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

//add travel place
router.post("/travel-place",async (request:Request,response:Response,next:NextFunction)=>{
    try {
        const travelPlace = new TravelPlaceModel(request.body)
        const addedTravelaplace = await travelPlaceLogic.addTravelPlace(travelPlace)
        response.status(201).json(addedTravelaplace)
    } 
    catch (error) {
        next(error) 
       }
               
    })

//delete
router.delete("/travel-place/:id",async (request:Request,response:Response,next:NextFunction)=>{
    try {
        const travelId = +request.params.id
        await travelPlaceLogic.deleteTravel(travelId)
        response.sendStatus(204)
    } 
    catch (error) {
        next(error)        
    }
})

export default router