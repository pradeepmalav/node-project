import Joi from "joi";

const schema = {
    signin: Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(5).max(30).required()
    }),

    signup: Joi.object({
        username: Joi.string().min(1).max(30).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(5).max(30).required()
    })

}

export const signinSchema = (req, res, next) => {
    // console.log(req.body);    
    const result = schema.signin.validate(req.body);
    // const result = Joi.validate(req.body, schema);
    // console.log('answer========================')

    if (result.error == null) {
        console.log('input data is valid');
        next();
    }
    else {
        console.log('input data is not valid');
        console.log(result.error.details[0].message)
        res.status(404).json({
            success: false,
            message: result.error.details[0].message
        })
    }
}

export const signupSchema = (req, res, next) => {
    const result = schema.signup.validate(req.body);
    
    if (result.error == null) {
        console.log('input data is valid');
        next();
    }
    else {
        console.log('input data is not valid');
        console.log(result.error.details[0].message)
        res.status(404).json({
            success: false,
            message: result.error.details[0].message
        })
    }
}





