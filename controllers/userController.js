
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import joi  from 'joi';
import { show, byId, update, del } from '../services/userServices.js';


//show user records
export const showAllUser = (req, res) => {
    // const { ...body } = req.body;
    show((error, results) => {
        // console.log('error==>', error, "result==>", results)
        if (error) {
            // console.log(error)
            res.status(400).json({
                success: false,
                message: 'Empty table or Record not found!'
            })
        }
        else {
            // console.log('success');
            res.json({
                success: true,
                results: results
            })
        }
    });
}

//show records by id
export const showBy = (req, res) => {
    // console.log(typeof req.user.id, typeof parseInt(req.query.id, 10))
    if (req.user.id === parseInt(req.query.id, 10)) {
        const { ...body } = req.query;

        byId(body, (error, results) => {
            if (error==null) {
                // console.log(error)
                res.status(400).json({
                    success: false,
                    message: 'Record not found! or Id not match'
                })
            }
            else {
                res.json({
                    success: true,
                    results: results
                })
            }
        });
    } else {
        res.status(403).json({
            success: false,
            message: 'You are not authrize the current record.'
        })
    }

}

//update user detail
export const updateUser = (req, res) => {
    const id = req.query;
    var { ...body } = [req.body, id];
    // console.log(body);
    // return false

    update(body, (error, results) => {
        if (!error) {
            res.status(200).json({
                success: false,
                message: 'Record not found! or Id not match'
            })
        }
        else {
            res.json({
                success: true,
                message: 'Record updated Successfully',
                results: results

            })
        }
    });

}

export const delteUser = (req, res) => {
    const { ...body } = req.query;

    del(body, (error, results) => {

        if (!error) {
            res.json({
                success: false,
                message: 'Record not found or id not match'
            })
        }
        else {
            res.json({
                success: true,
                results: results
            })
        }

    })
}



