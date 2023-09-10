import express from 'express'
import { json } from "express";
import { config } from "dotenv";
import cors from 'cors'
import { connectionDB } from './DB/connection.js';
import { routerUser } from './modules/user/user.router.js';
import { Prouter } from './modules/poll/poll.router.js';
config({path:'./config/config.env'})
const app = express()
app.use(cors());
const port = process.env.PORT
const baseURL ='/api/v1'
app.use(json());
connectionDB()


app.use(`${baseURL}/use` ,routerUser)
app.use(`${baseURL}/poll`,Prouter)
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))