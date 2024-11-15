import UserModel from "../models/User.js"
export const  isAdmin=async(req,res,next)=>{
    try {
        const{email}=req.body;
        UserModel.findOne({email})
        const userInfo=await UserModel.findOne({email})
        if(userInfo&& userInfo.role=="Admin")
        {
            next();
            //proceed
        }
        else{
            res.status(403).json({
                message:"access denied,only admin can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
    }
}