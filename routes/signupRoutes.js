import expressPkg from 'express';
// import joi from 'joi';          //for validation

const express = expressPkg;
const app = express();

export const signupRouter = express.Router();

import { signupSchema } from '../middleware/validation.js';
import { signupUser } from '../controllers/signupController.js';
// import { checkToken } from '../middleware/tokenValidation.js'

//signup user 
signupRouter.post('/signup', signupSchema, signupUser);                 