import axios from "axios"
import AreaModel from "../3-models/AreaModel"
import appConfig from "../2-utuls/Config"
import TravelPlaceModel from "../3-models/TravelPlaceModel"
import { deflate } from "zlib"

class TravelPlaceService{
    public async getAllArea(): Promise<AreaModel[]>{
        const response = await axios.get<AreaModel[]>(appConfig.areaUrl)
        const area = response.data
        return area

    }
    
    public async getPlaceByAreaId(areaId:number): Promise<TravelPlaceModel[]>{
        const respons =await axios.get<TravelPlaceModel[]>(appConfig.travelPlaceByAreaUrl + areaId)
        const travelPlace = respons.data
        return travelPlace
        
    
    }
    public async addTravelPlace(travelPlace:TravelPlaceModel): Promise<TravelPlaceModel>{
        const respons = await axios.post<TravelPlaceModel>(appConfig.travelPlaceByAreaUrl,travelPlace)
        const addedTravelaplace = respons.data
        return addedTravelaplace
     
        
    }
    
    public async deleteTravel(id:number):Promise<void>{
        await axios.delete<void>(appConfig.travelPlaceUrl + id)
    }   
}

export default TravelPlaceService