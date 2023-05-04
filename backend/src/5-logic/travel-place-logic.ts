import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import AreaModel from "../4-models/area-model"
import TravelPlaceModel from "../4-models/travel-place-model"
import { ResouceNotFoundErrorModel } from "../4-models/error-model"


async function getAllArea(): Promise<AreaModel[]>{
    const sql = `SELECT * FROM area`
    const area = await dal.execute(sql)
    return area
}

async function getPlaceByAreaId(areaId:number): Promise<TravelPlaceModel[]>{
    const sql = `SELECT T.*, A.areaName
                 FROM travelplace AS T JOIN area AS A
                 ON T.areaId = A.areaId
                 WHERE T.areaId = ?`
    const travelplace = await dal.execute(sql,[areaId])
    return travelplace

}
async function addTravelPlace(travelPlace:TravelPlaceModel): Promise<TravelPlaceModel>{
    const sql = `INSERT INTO travelplace 
                VALUES(DEFAULT,
                    ?,?,?,?,?,?
                    )`
        const info:OkPacket = await dal.execute(sql[travelPlace.areaId,travelPlace.name,travelPlace.description,travelPlace.priceOfChild,travelPlace.priceOfAdult,travelPlace.discount])
        travelPlace.travelPlaceId = info.insertId
        return travelPlace
}

async function deleteTravel(id:number):Promise<void>{
    const sql = `DELETE FROM travelplace
                 WHERE travelPlaceId =?`
    const info:OkPacket = await dal.execute(sql,[id])
    if(info.affectedRows === 0) throw new ResouceNotFoundErrorModel(id)

}




export default {
    getAllArea,
    getPlaceByAreaId,
    addTravelPlace,
    deleteTravel

} 