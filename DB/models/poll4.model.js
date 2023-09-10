import { model, Schema, Types } from "mongoose";
const poll4Schema = new Schema(
  {
text:{
  type:String,
  require:true
},
yes:[
  String
],
No:[
  String
],
createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
  },
  {
    timestamps: true,
  }
);




const poll4Model = model("pollFour", poll4Schema);

export default poll4Model;















