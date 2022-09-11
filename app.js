
import dotenv from 'dotenv';
import expressPkg from "express";
const express = expressPkg;
const app = express();
app.use(express.json());

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded());   //For feching data .......

import { userRouter } from './routes/userRoutes.js';
import { loginRouter,logoutRouter } from './routes/signinRoutes.js';
import { signupRouter } from './routes/signupRoutes.js';


//All user routes 
app.use('/user/',userRouter);  

//login user
app.use('/admin/',loginRouter);

//logout user 
app.use('/admin/',logoutRouter)


//user signup
app.use('/admin',signupRouter)


//for localhost:port_no
app.get('/',(req,res) =>{
    res.send('Welcome to My world');
});


dotenv.config({path:'.env'});
const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`)
});

