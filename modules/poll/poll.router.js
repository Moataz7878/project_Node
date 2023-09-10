import { Router } from "express";
import { AnserFourUser, AnserThreeUser, AnserTwoUser, AnserUser, createPoll, createPollFour, createPollThree, createPollTwo, getallPoll, getallPollFour, getallPollThree, getallPollTwo, tabollPoll, tabollPollFour, tabollPollFourNegative, tabollPollNegative, tabollPollThree, tabollPollThreeNegative, tabollPollTwo, tabollPollTwoNegative, thedelete, thedelete2, thedelete3, thedelete4 } from "./poll.controll.js";


const Prouter = Router()

Prouter.post('/createPoll',createPoll)

Prouter.post('/AnserUser', AnserUser)

Prouter.get('/getall', getallPoll)
Prouter.get('/tabollPoll', tabollPoll)
Prouter.get('/tabollPollNegative', tabollPollNegative)

Prouter.delete('/thedelete', thedelete)


//===========================================================================

Prouter.post('/createPollTwo',createPollTwo)
Prouter.post('/AnserTwoUser', AnserTwoUser)

Prouter.get('/getallPollTwo', getallPollTwo)
Prouter.get('/tabollPollTwo', tabollPollTwo)
Prouter.get('/tabollPollTwoNegative', tabollPollTwoNegative)

Prouter.delete('/thedelete2', thedelete2)


//==============================================================================

Prouter.post('/createPollThree',createPollThree)
Prouter.post('/AnserThreeUser', AnserThreeUser)

Prouter.get('/getallPollThree', getallPollThree)
Prouter.get('/tabollPollThree', tabollPollThree)
Prouter.get('/tabollPollThreeNegative', tabollPollThreeNegative)

Prouter.delete('/thedelete3', thedelete3)


//==========================================================================

Prouter.post('/createPollFour',createPollFour)

Prouter.post('/AnserFourUser', AnserFourUser)

Prouter.get('/getallPollFour', getallPollFour)
Prouter.get('/tabollPollFour', tabollPollFour)
Prouter.get('/tabollPollFourNegative', tabollPollFourNegative)

Prouter.delete('/thedelete4', thedelete4)




export {Prouter}