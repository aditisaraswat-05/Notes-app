import UserModel from "../models/Auth.js"
import by                                        //library in nodejs for securely hashing & verifying passwords

// const Register=async(req,res)=>{
//     res.send('hello world from controllers')
// }

//APi for register

const Register=async(req,res)=>{


    
    try{
        const{userName,email,password}=req.body              //user will send this to us
        if(!userName||!email||!password){
            return res.status(303).json({sucess:false,message:"All fields are required"})
        }
        const existingUser=await UserModel.findOne({email})     //checking weather user is in database or not
        if(existingUser){                                    //condition to check user already exist or not, if yes send error
            return res.status(303).json({sucess:false,message:"User already exist Please Login"})
        }
        const NewUser=new UserModel({                        //if user doesnot exists
            userName,email,password                         //from body
        })
        NewUser.save                                        //for new user
        res.status(200).json({sucess:true,message:"User Register Sucessfully",User:NewUser})
    }catch(error){
        console.log(error)
        return res.status(303).json({sucess:false,message:"Internal Server Error"})

    }
}


export{Register}