import User from "../Model/userSchema.js";
import bcrypt from "bcrypt"

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
    return res.status(400).json({message:"account create sucessfully"})
} catch (error) {
    return res.status(400).json({message:"error creating user"})
}
}