

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { signup } from '../services/signupServices.js';


//signup query
export const signupUser = async (req, res) => {
    const { password } = req.body;
    const { ...body } = req.body;
    // console.log(body)
    // return false
    body.password = await bcrypt.hash(password, 10);

    signup(body, (error, results) => {

        if (error == null) {
            res.status(400).json({
                success: false,
                message: 'User already exists or connection error'
            })
        }
        else {
            res.json({
                success: true,
                results: results
            })
        }
    });
}
