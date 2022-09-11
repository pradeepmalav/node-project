import { dbconnection } from '../config/database.js';


//signup 
export const signup = (data, callback) => {
    // console.log(data)
    const { username, email, password } = data;

    const duplicate = 'select email from mysql_query where email = ?';
    dbconnection.query(duplicate, [email], (error, results, fields) => {
        // console.log('first:' + error,results)

        if(results.length > 0) {
            return callback(error)           
        }
        else {
            // console.log('second:' + error,results) 
            // console.log(email,username,password);
            // return false
            const query = 'insert into mysql_query (username,email, password) VALUES (?, ?, ?)';
            dbconnection.query(query, [username, email, password], (error, results, fields) => {
                // console.log(results)
                    // return false
                if(error) {
                    return callback(error)
                }
                else {
                    
                    return callback('', results);
                }
            });
        }
    })
}