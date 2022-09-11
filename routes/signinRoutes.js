import expressPkg from 'express';
// import joi from 'joi';          //for validation

const express = expressPkg;
const app = express();

export const loginRouter = express.Router();
export const logoutRouter = express.Router();

import { signinSchema } from '../middleware/validation.js';
import { loginUser,logoutUser} from '../controllers/signinController.js';

import { checkToken } from '../middleware/tokenValidation.js'

//login user 
loginRouter.post('/signin', signinSchema , loginUser);

logoutRouter.post('/signout', checkToken ,logoutUser);

