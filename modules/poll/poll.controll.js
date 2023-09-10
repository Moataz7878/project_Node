import pollModel from "../../DB/models/poll.model.js";
import poll2Model from "../../DB/models/poll2.model.js";
import poll3Model from "../../DB/models/poll3.model.js";
import poll4Model from "../../DB/models/poll4.model.js";
import userModel from "../../DB/models/user.model.js";
 // api question_1
export const createPoll =async(req,res,next)=>{
   try{
    const {text,createdBy}=req.body
    const user =await userModel.findOne({_id:createdBy , role:'Admin'})
if (!user) {
  return res.json({message:"fail id Admin"})
}
const newPoll = new pollModel({
  text,
  createdBy,
});
if(!newPoll){
  return res.json({message:"fail poll"})
}
const data= await newPoll.save();

if (!data) {
  return res.json({message:'fail save'})
} 
res.json({message:"Done" ,data});

   } catch (error) {
    console.log(error);
    res.json({message:"fail catch",error})
   }
}

export const AnserUser =async(req,res)=>{
  try {
    const []= req.body
    // console.log(req.body);
    for (const news of req.body) {
      // console.log(news.idQuestion);
      const poll = await pollModel.findOne({_id:news.idQuestion})
      if (!poll) {
       return res.json({message:'fail id Question'})
      }
      if (news.answer == "ok_Severely") {
       await pollModel.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          ok_Severely:news.email
         }
       })
      }
      if (news.answer == "ok") {
       await pollModel.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          ok:news.email
         }
       })
      }
      if (news.answer == "neutral") {
       await pollModel.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          neutral:news.email
         }
       })
      }
      if (news.answer == "exhibition") {
       await pollModel.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          exhibition:news.email
         }
       })
      }
      if (news.answer == "exhibition_Severely") {
       await pollModel.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          exhibition_Severely:news.email
         }
       })
      }
    }
 
   res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch",error})
  }
}

export const getallPoll =async(req,res,next)=>{
  try{
const poll = await pollModel.find().select('text')
return res.json({message:"Done", poll})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


export const tabollPoll =async(req,res)=>{
  try {
const poll = await pollModel.find().select('ok_Severely  ok neutral exhibition exhibition_Severely')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const ok_Severely = poll[i].ok_Severely.length;
  const ok = poll[i].ok.length;
  const neutral = poll[i].neutral.length;
  const exhibition = poll[i].exhibition.length;
  const exhibition_Severely = poll[i].exhibition_Severely.length;
  const all =ok_Severely+ok+neutral+exhibition+exhibition_Severely
  const average =((ok_Severely*5)+(ok*4)+(neutral*3)+(exhibition*2)+(exhibition_Severely*1))
  /(all)

    const deviation =
(  ((25*ok_Severely)+(16*ok)+(9*neutral)+(4*exhibition)+(1*exhibition_Severely))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/5)*100

const T_test =(average-3)/(Thedeviation/Math.sqrt(all))

    data.push({ok_Severely ,ok , neutral ,exhibition ,exhibition_Severely ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const tabollPollNegative =async(req,res)=>{
  try {
const poll = await pollModel.find().select('ok_Severely  ok neutral exhibition exhibition_Severely')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const ok_Severely = poll[i].ok_Severely.length;
  const ok = poll[i].ok.length;
  const neutral = poll[i].neutral.length;
  const exhibition = poll[i].exhibition.length;
  const exhibition_Severely = poll[i].exhibition_Severely.length;
  const all =ok_Severely+ok+neutral+exhibition+exhibition_Severely
  const average =((ok_Severely*1)+(ok*2)+(neutral*3)+(exhibition*4)+(exhibition_Severely*5))
  /(all)

    const deviation =
(  ((1*ok_Severely)+(4*ok)+(9*neutral)+(16*exhibition)+(25*exhibition_Severely))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/5)*100

const T_test =(average-3)/(Thedeviation/Math.sqrt(all))

    data.push({ok_Severely ,ok , neutral ,exhibition ,exhibition_Severely ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const thedelete =async(req,res)=>{
  try {
    const {idQuestion} =req.body
    const poll = await pollModel.findOneAndDelete({_id:idQuestion})
    if (!poll) {
     return res.json({message:'fail id Question'})
    }
    res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


//=======================================

// api poll Two

export const createPollTwo =async(req,res,next)=>{
  try{
   const {text,createdBy}=req.body
   const user =await userModel.findOne({_id:createdBy , role:'Admin'})
if (!user) {
 return res.json({message:"fail id Admin"})
}
const newPoll = new poll2Model({
 text,
 createdBy,
});
if(!newPoll){
 return res.json({message:"fail poll"})
}
const data= await newPoll.save();

if (!data) {
 return res.json({message:'fail save'})
} 
res.json({message:"Done" ,data});

  } catch (error) {
   console.log(error);
   res.json({message:"fail catch",error})
  }
}

export const AnserTwoUser =async(req,res)=>{
  try {
    const []= req.body
    console.log(req.body);
    for (const news of req.body) {
      console.log(news.idQuestion);
      const poll = await poll2Model.findOne({_id:news.idQuestion})
      if (!poll) {
       return res.json({message:'fail id Question'})
      }
      if (news.answer == "acceptable") {
       await poll2Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
           acceptable:news.email
         }
       })
      }
      if (news.answer == "weak") {
       await poll2Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
           weak:news.email
         }
       })
      }
      if (news.answer == "good") {
       await poll2Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
           good:news.email
         }
       })
      }
      if (news.answer == "excellent") {
       await poll2Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
           excellent:news.email
         }
       })
      }
    }
 
   res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch",error})
  }
}

export const getallPollTwo =async(req,res,next)=>{
  try{
const poll = await poll2Model.find().select('text')
return res.json({message:"Done", poll})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const tabollPollTwo =async(req,res)=>{
  try {
const poll = await poll2Model.find().select('acceptable  weak good excellent ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const acceptable = poll[i].acceptable.length;
  const weak = poll[i].weak.length;
  const good = poll[i].good.length;
  const excellent = poll[i].excellent.length;
  const all =acceptable+weak+good+excellent
  const average =((acceptable*4)+(weak*3)+(good*2)+(excellent*1))
  /(all)

    const deviation =
(  ((16*acceptable)+(9*weak)+(4*good)+(1*excellent))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/4)*100

const T_test =(average-3)/(Thedeviation/Math.sqrt(all))

    data.push({acceptable ,weak , good ,excellent  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


export const tabollPollTwoNegative =async(req,res)=>{
  try {
const poll = await poll2Model.find().select('acceptable  weak good excellent ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const acceptable = poll[i].acceptable.length;
  const weak = poll[i].weak.length;
  const good = poll[i].good.length;
  const excellent = poll[i].excellent.length;
  const all =acceptable+weak+good+excellent
  const average =((acceptable*1)+(weak*2)+(good*3)+(excellent*4))
  /(all)

    const deviation =
(  ((1*acceptable)+(4*weak)+(9*good)+(16*excellent))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/4)*100

const T_test =(average-2)/(Thedeviation/Math.sqrt(all))

    data.push({acceptable ,weak , good ,excellent  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const thedelete2 =async(req,res)=>{
  try {
    const {idQuestion} =req.body
    const poll = await poll2Model.findOneAndDelete({_id:idQuestion})
    if (!poll) {
     return res.json({message:'fail id Question'})
    }
    res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


//=================================================================================
// api poll Three

export const createPollThree =async(req,res,next)=>{
  try{
   const {text,createdBy}=req.body
   const user =await userModel.findOne({_id:createdBy , role:'Admin'})
if (!user) {
 return res.json({message:"fail id Admin"})
}
const newPoll = new poll3Model({
 text,
 createdBy,
});
if(!newPoll){
 return res.json({message:"fail poll"})
}
const data= await newPoll.save();

if (!data) {
 return res.json({message:'fail save'})
} 
res.json({message:"Done" ,data});

  } catch (error) {
   console.log(error);
   res.json({message:"fail catch",error})
  }
}

export const AnserThreeUser =async(req,res)=>{
  try {
    const []= req.body
    for (const news of req.body) {
      const poll = await poll3Model.findOne({_id:news.idQuestion})
      if (!poll) {
       return res.json({message:'fail id Question'})
      }
      if (news.answer == "alot") {
       await poll3Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          alot:news.email
         }
       })
      }
      if (news.answer == "alittle") {
       await poll3Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          alittle:news.email
         }
       })
      }
      if (news.answer == "scarcely") {
       await poll3Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          scarcely:news.email
         }
       })
      }
      if (news.answer == "veryRarely") {
       await poll3Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          veryRarely:news.email
         }
       })
      }
      
    }
 
   res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch",error})
  }
}

export const getallPollThree =async(req,res,next)=>{
  try{
const poll = await poll3Model.find().select('text')
return res.json({message:"Done", poll})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


export const tabollPollThree =async(req,res)=>{
  try {
const poll = await poll3Model.find().select('alot  alittle scarcely veryRarely ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const alot = poll[i].alot.length;
  const alittle = poll[i].alittle.length;
  const scarcely = poll[i].scarcely.length;
  const veryRarely = poll[i].veryRarely.length;
  const all =alot+alittle+scarcely+veryRarely
  const average =((alot*4)+(alittle*3)+(scarcely*2)+(veryRarely*1))
  /(all)


    const deviation =
(  ((16*alot)+(9*alittle)+(4*scarcely)+(1*veryRarely))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/4)*100

const T_test =(average-2)/(Thedeviation/(Math.sqrt(all)))

    data.push({alot ,alittle , scarcely ,veryRarely  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const tabollPollThreeNegative =async(req,res)=>{
  try {
const poll = await poll3Model.find().select('alot  alittle scarcely veryRarely ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const alot = poll[i].alot.length;
  const alittle = poll[i].alittle.length;
  const scarcely = poll[i].scarcely.length;
  const veryRarely = poll[i].veryRarely.length;
  const all =alot+alittle+scarcely+veryRarely
  const average =((alot*1)+(alittle*2)+(scarcely*3)+(veryRarely*4))
  /(all)


    const deviation =
(  ((1*alot)+(4*alittle)+(9*scarcely)+(16*veryRarely))-
( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/4)*100

const T_test =(average-2)/(Thedeviation/(Math.sqrt(all)))

    data.push({alot ,alittle , scarcely ,veryRarely  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const thedelete3 =async(req,res)=>{
  try {
    const {idQuestion} =req.body
    const poll = await poll3Model.findOneAndDelete({_id:idQuestion})
    if (!poll) {
     return res.json({message:'fail id Question'})
    }
    res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


//==============================================================================================================

// api poll Four

export const createPollFour =async(req,res,next)=>{
  try{
   const {text,createdBy}=req.body
   const user =await userModel.findOne({_id:createdBy , role:'Admin'})
if (!user) {
 return res.json({message:"fail id Admin"})
}
const newPoll = new poll4Model({
 text,
 createdBy,
});
if(!newPoll){
 return res.json({message:"fail poll"})
}
const data= await newPoll.save();

if (!data) {
 return res.json({message:'fail save'})
} 
res.json({message:"Done" ,data});

  } catch (error) {
   console.log(error);
   res.json({message:"fail catch",error})
  }
}


export const AnserFourUser =async(req,res)=>{
  try {
    const []= req.body
    for (const news of req.body) {
      const poll = await poll4Model.findOne({_id:news.idQuestion})
      if (!poll) {
       return res.json({message:'fail id Question'})
      }
      if (news.answer == "yes") {
       await poll4Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          yes:news.email
         }
       })
      }
      if (news.answer == "No") {
       await poll4Model.findOneAndUpdate({_id:news.idQuestion},{
         $addToSet:{
          No:news.email
         }
       })
      }
    }
 
   res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch",error})
  }
}

export const getallPollFour =async(req,res,next)=>{
  try{
const poll = await poll4Model.find().select('text')
return res.json({message:"Done", poll})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


export const tabollPollFour =async(req,res)=>{
  try {
const poll = await poll4Model.find().select('yes  No ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const yes = poll[i].yes.length;
  const No = poll[i].No.length;

  const all =yes+No
  const average =((yes*2)+(No*1))/(all)


    const deviation =
(  ((4*yes)+(1*No))-( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/2)*100

const T_test =(average-1)/(Thedeviation/(Math.sqrt(all)))

 data.push({yes ,No  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


export const tabollPollFourNegative =async(req,res)=>{
  try {
const poll = await poll4Model.find().select('yes  No ')
let data=[]
for (let i = 0; i < poll.length; i++) {
  const yes = poll[i].yes.length;
  const No = poll[i].No.length;

  const all =yes+No
  const average =((yes*1)+(No*2))/(all)


    const deviation =
(  ((1*yes)+(4*No))-( (average*average)*all ) )/(all-1)

const Thedeviation = Math.sqrt(deviation)

const rate =(average/2)*100

const T_test =(average-2)/(Thedeviation/(Math.sqrt(all)))

 data.push({yes ,No  ,average ,Thedeviation ,rate ,T_test})
}
return res.json({message:"Done", data})
    
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}

export const thedelete4 =async(req,res)=>{
  try {
    const {idQuestion} =req.body
    const poll = await poll4Model.findOneAndDelete({_id:idQuestion})
    if (!poll) {
     return res.json({message:'fail id Question'})
    }
    res.json({message:"Done"})
  } catch (error) {
    console.log(error);
    res.json({message:"fail catch"})
  }
}


