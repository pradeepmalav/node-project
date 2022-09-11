
import { dbconnection } from "../config/database.js";
// import { logout } from "../controllers/signinController.js";

//login user by email
export const login = (data,callback) =>{
    const { email } = data;
    const query ='select * from mysql_query where email = ?';
    
    dbconnection.query(query,[email],(error,results) =>{
        // console.log(results);
        if(error){
            return callback(error)
        }

        if(results != ''){
            // console.log('success')
            return callback('',results)
            //
        }
        else{       
            
            // console.log('failed')
            return callback(error)
        }
        
    })
}



export const logout = (token,callback) =>
{
    const ans = token;
    console.log('format======='+ans)
    return callback('');
    // return false
    // if(token) return token = undefined;
    
        // if (decodedToken) {
        //     // const decodedToken = jwt.decode(token)
        //     // console.log(decodedToken)
        //     const ans = decodedToken && (decodedToken.exp * 1000) > new Date().getTime()
        //     console.log(ans);
        // }
}















