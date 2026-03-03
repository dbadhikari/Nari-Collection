import express from "express"
import { createUser } from "../AuthController/userAuth.js"
import Upload from "../middleware/imageUpload.js"


const userRoute=express.Router()

userRoute.post("/create",Upload.single("image"),createUser)


export default userRoute