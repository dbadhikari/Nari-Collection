import express from "express"
import userRoute from "./userRoute.js"


const mainRoute=express.Router()

mainRoute.use("/user",userRoute)


export default mainRoute