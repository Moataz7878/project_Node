import { model, Schema, Types } from "mongoose";
const poll2Schema = new Schema(
  {
text:{
  type:String,
  require:true
},
acceptable:[
  String
],
weak:[
  String
],
good:[
  String
],
excellent:[
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




const poll2Model = model("pollTwo", poll2Schema);

export default poll2Model;















