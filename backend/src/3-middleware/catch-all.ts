import exp from "constants";
import { NextFunction, Request, Response } from "express";



function catchAll(err:any,request:Request,respons:Response,next:NextFunction){
    console.log (err.mag)
    respons.status(err.status).send(err.msg)
}

export default catchAll