class TravelPlaceModel{
    public travelPlaceId:number
    public areaId:number
    public name:string
    public descripion:string
    public priceOfChild:number
    public priceOfAdult:number
    public discount:number

    public constructor (TravelPlace: TravelPlaceModel){
        this.travelPlaceId = TravelPlace.travelPlaceId
        this.areaId = TravelPlace.areaId
        this.name = TravelPlace.name
        this.descripion = TravelPlace.descripion
        this.priceOfChild = TravelPlace.priceOfChild
        this.priceOfAdult = TravelPlace.travelPlaceId
        this.discount = TravelPlace.discount
        
    }
}
export default TravelPlaceModel