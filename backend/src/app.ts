import express from "express";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./2-utils/appconfig";

const server = express()
server.use(express.json())
//server.use("/api",)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port ${appConfig.port}`)))
