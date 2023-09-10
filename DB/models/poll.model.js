import { model, Schema, Types } from "mongoose";
const pollSchema = new Schema(
  {
text:{
  type:String,
  require:true
},
//[ok_Severely ,ok ,neutral,exhibition ,exhibition_Severely]
ok_Severely:[
  String
],
ok:[
  String
],
neutral:[
  String
],
exhibition:[
  String
],
exhibition_Severely:[
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




const pollModel = model("poll", pollSchema);

export default pollModel;















