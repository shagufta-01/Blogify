import jwt from "jsonwebtoken"
import userModal from "../modals/user.modal.js"
const createTokenAndSaveCookie = async(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookie("token", token, {
        httpOnly: true,
        secure:true,
        sameSite:"Strict",
    })
    await userModal.findByIdAndUpdate(userId,{token})
    return token;

}
export default createTokenAndSaveCookie;