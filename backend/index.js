import express from "express";
import dotenv from "dotenv"
import connectDB from "./Config/db.js";
dotenv.config()


const app=express()
connectDB()
app.get("/",(req,res)=>{
    res.send("This is Backend...")
})


app.listen(2000,()=>{
    console.log("Server Started...")
})