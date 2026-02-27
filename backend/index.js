import express from "express";

const app=express()

app.get("/",(req,res)=>{
    res.send("This is Backend...")
})


app.listen(2000,()=>{
    console.log("Server Started...")
})