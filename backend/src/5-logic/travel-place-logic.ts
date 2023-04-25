import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import AreaModel from "../4-models/area-model"
import TravelPlaceModel from "../4-models/travel-place-model"


async function getAllArea(): Promise<AreaModel[]>{
    const sql = `SELECT * FROM area`
    const area = await dal.execute(sql)
    return area
}

async function getPlaceByAreaId(areaId:number): Promise<TravelPlaceModel[]>{
    const sql = `SELECT T.*, A.areaName
                 FROM travelplace AS T JOIN area AS A
                 ON T.areaId = A.areaId
                 WHERE T.areaId = ${areaId}`
    const travelplace = await dal.execute(sql)
    return travelplace

}
async function addTravelPlace(travelPlace:TravelPlaceModel): Promise<TravelPlaceModel>{
    const sql = `INSERT INTO travelplace 
                VALUES(DEFAULT,
                    ${travelPlace.areaId},
                    '${travelPlace.name}',
                    '${travelPlace.description}',
                    ${travelPlace.priceOfChild},
                    ${travelPlace.priceOfAdult},
                    ${travelPlace.discount}
            )`
        const info:OkPacket = await dal.execute(sql)
        travelPlace.travelPlaceId = info.insertId
        return travelPlace
}



export default {
    getAllArea,
    getPlaceByAreaId,
    addTravelPlace

} 