
import { dbconnection } from "../config/database.js";

//show all records
export const show = (callback) => {
    // const { username, email, password, con_password } = data;
    const query = 'select * from mysql_query';
    dbconnection.query(query, [], (error, results, fields) => {
        if (error) {
            return callback(error, '')
        }
        else {
            if (results.length > 0) {
                return callback('', results);
            }
            else {
                return callback('', results);
            }
        }
    });
}

//show record by id
export const byId = (data, callback) => {
    // console.log(data);
    // return false
    const { id } = data
    const query = 'select * from mysql_query where id = ?';
    dbconnection.query(query, [id], (error, results, fields) => {
        // console.log(error,results)
        if (error) {
            return callback(error)
        }
        else {
            if (results.length > 0) {
                return callback('', results);
            }
            else {
                return callback(error);
            }
        }
    });
}

//update record
export const update = (data, callback) => {
    console.log(data);
    const { username, email } = data[0];
    const id = data[1].id;

    const query = 'update mysql_query set username = ?, email = ? where id = ?';
    dbconnection.query(query, [username, email, id], (error, results, fields) => {

        if (error) {
            return callback(error);
        }
        else {

            if (results.affectedRows === 1) {
                console.log(results);
                return callback(true, results);

            }
            else {
                return callback(error);
            }
        }
    })
}

//delete user 
export const del = (data, callback) => {
    const { id }= data;
    const query = 'delete from mysql_query where id = ?'
   const a = dbconnection.query(query, [id], (error, results, fields) => {
        // return false
        if(error){
            return callback(error)
        }
        else{
            if (results.affectedRows === 1) {
                
                return callback(true,results);
            }
            else{
                return callback(error)
            }
        }
        
    });
}



