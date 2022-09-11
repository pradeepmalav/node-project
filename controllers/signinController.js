
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { login ,logout} from '../services/signinServices.js';


//login_in user
export const loginUser = (req, res) => {
    const body = req.body;

    // console.log(body);
    const { password } = body;

    login(body, (error, results) => {

        if (error == null) {
            console.log(error)

            res.json({
                success: false,
                message: 'Please enter correct email or password !'
            })
        }
        else {
            //  console.log(results)   
            //         
            if (results.length > 0) {
                const passHash = results[0].password;
                const { email, id, username } = results[0];
                //  console.log('email', email, id, username)
                const verified = bcrypt.compareSync(password, passHash);
                if (verified) {
                    let jwtSecretKey = process.env.jwtSecretKey;
                    // console.log(jwtSecretKey)
                    const token = jwt.sign(
                        {
                            id,
                            email,
                            username,
                        },
                        jwtSecretKey,
                        { expiresIn: "1h" });

                    //  const ans = res.setHeader('Authorization', 'Bearer ' + token);
                    // console.log(ans);
                    // return false

                    res.json({
                        success: true,
                        message: 'login success',
                        results: results,
                        authorization: token
                    })
                }
                else {
                    res.json({
                        success: false,
                        message: 'Please enter correct email or password !'
                    })
                }
            }

        }
    })
}

//logout with jwt token
export const logoutUser = (req, res) => {
    let token = req.headers.authorization;
    console.log(token);
    // return false
    token = token.split(' ')[1];
    logout(token,(callback) => {
        console.log('after return ========='+token);

        if(callback==''){
            // console.log('success');
            jwtr.destroy(token);

            console.log('Logout Success');
            res.json({
                success:true,
                message:'Logout Success'
            })

        }
        else{
            console.log('failed')
        }
        // return false
    })

}

