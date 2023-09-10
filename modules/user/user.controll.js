
import userModel from "../../DB/models/user.model.js"
import { compareFunction } from "../utils/hashFunction.js";


//sinUp
export const signUp = async(req,res)=>{
try {
    const {firstName,lastName,email,password}=req.body
    const emailExist =await userModel.findOne({email})
    if (emailExist) {
        return  res.json({message:'email already exist'});
    }
    const newUser = new userModel({
        firstName,
        lastName,
        email,
        password,
      });
      if(!newUser){
        return res.json({message:"fail newUser"})
      }
      const save= await newUser.save();

      if (!save) {
        return res.json({message:'fail save'})
      }   
      res.json({message:"Done signUp" ,save});

} catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
}


}

//login user
export const login =async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.json({message:"fail userExist"})
    }

    const match = compareFunction({
      payload: password,
      referenceData: userExist.password
    });
    if (!match) {
      return res.json({message:'fail password'})
    }
    await userModel.findOneAndUpdate({email},{
      isLoggedIn:true
    })
    res.json({message:'Done'})
    
   
  
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
 
};
