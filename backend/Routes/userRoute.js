import express from "express"
import { createUser, loginUser, logoutUser } from "../AuthController/userAuth.js"
import Upload from "../middleware/imageUpload.js"


const userRoute=express.Router()

userRoute.post("/create",Upload.single("image"),createUser)
userRoute.post("/login",loginUser)
userRoute.post("/logout",logoutUser)
export default userRoute