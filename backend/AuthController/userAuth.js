import User from "../Model/userSchema.js";
import bcrypt from "bcrypt"
import generateToken from "../Config/token.js";
export const createUser=async(req,res)=>{
try {
    console.log(req.body)
    const{name,email,password,role}=req.body
    if(!name||!email||!password){
       return res.status(400).json({message:"enter all details"})
    }
    const isExist=await User.findOne({email})
    if(isExist){
        return res.status(400).json({message:"Email already used"})
    }
    const hashPassword=await bcrypt.hash(password,10) 
    const newUser=new User({
        name,
        email,
        role,
        password:hashPassword,
        image:req.file? `${process.env.Backend_URL}/upload/${req.file.filename}` :null
    })

    await newUser.save()
    return res.status(201).json({message:"account create sucessfully"})
} catch (error) {
    return res.status(400).json({message:"error creating user"})
}
}

export const loginUser=async(req,res)=>{
    try {
        console.log(req.body)
    const{email,password}=req.body
    if(!email||!password){
       return res.status(400).json({message:"enter all details"})
    }
    const isExist=await User.findOne({email})
    if(!isExist){
        return res.status(400).json({message:"Email Not found used"})
    }
    const isMacth= await bcrypt.compare(password,isExist.password)
    if(!isMacth){
        return res.status(400).json({message:"incorrect password"})
    }
    const token=generateToken(isExist._id)
    console.log(token)

    res.cookie("token",token,{
        secure:false,
        httpOnly:true,
        sameSite:"lax",
        maxAge:7*24*60*60*1000
    })
 
     return res.status(200).json({message:"login sucessfully",token,user:isExist})

    } catch (error) {
         return res.status(400).json({message:"error login user "})
    }
}


export const logoutUser=async(req,res)=>{
try {
    res.clearCookie("token",{
        secure:false,
        httpOnly:true,
        sameSite:"lax",
    })
    return res.status(200).json({message:"logout sucessfully"})
} catch (error) {
     return res.status(400).json({message:"error logout user "})
}
}