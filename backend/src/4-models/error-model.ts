export class ErrorModel{
    public constructor(public status:number, public msg:string){}
}
export class RouteNotFoundErrorModel extends ErrorModel{
    public constructor(route:string){
        super(404,`the ${route} is not exists`)
    } 
}