import { model, Schema, Types } from "mongoose";
const poll3Schema = new Schema(
  {
text:{
  type:String,
  require:true
},
alot:[
  String
],
alittle:[
  String
],
scarcely:[
  String
],
veryRarely:[
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




const poll3Model = model("pollThree", poll3Schema);

export default poll3Model;















