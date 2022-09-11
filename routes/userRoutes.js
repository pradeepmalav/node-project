import expressPkg from 'express';
import joi from 'joi';          //for validation

const express = expressPkg;
const app = express();
export const userRouter = express.Router();


// showAllUser, show by id , update , delete record
import { showAllUser,showBy, updateUser,delteUser } from '../controllers/userController.js';
import { checkToken } from '../middleware/tokenValidation.js'


userRouter.get('/list',checkToken, showAllUser);          //show all user 
userRouter.get('/:id', checkToken, showBy);               //show user by id 
userRouter.put('/:id', checkToken, updateUser);        //update user detail by id
userRouter.delete('/:id', checkToken, delteUser);         //delete user by id



/* todo: 
Get {
    user/?id:RECORD_ID //query string
    user/list //?page: PAGE_NO&reocordCount: {10||100} }
 }

post {
    user/add : {
        JSON 
    }
}

put {
    user/?id=    //queryString 
    requestBody
    {
        JSON
    }
}

delete {
    user/?id   //query or Params
}

*/