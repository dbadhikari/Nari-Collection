import express from "express";
import dotenv from "dotenv"
import connectDB from "./Config/db.js";
import mainRoute from "./Routes/mainRoutes.js";
import cors from "cors"
dotenv.config()


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()
app.frontend={
origin:"http://localhost:5173",
credentials:true
}
app.use("/upload",express.static("upload"))
app.use("/api/",mainRoute)
app.get("/",(req,res)=>{
    res.send("This is Backend...")
})


app.listen(2000,()=>{
    console.log("Server Started...")
})