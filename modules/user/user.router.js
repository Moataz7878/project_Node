import { Router } from "express";
import { login, signUp } from "./user.controll.js";
import { validation } from "../validation/validation.js";
import { loginValidation, signUpValidatinon } from "./user.validation.js";


const routerUser = Router()


routerUser.post('/signUP',signUp)
routerUser.post('/login' ,validation(loginValidation),login)






export {routerUser}