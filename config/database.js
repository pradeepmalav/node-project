
import mysql from 'mysql';

//import dotenv from 'dotenv';
//dotenv.config({path:'.env'});
// const connectionOption = {
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASS,
//     database:process.env.MYSQL_DB,
//     port : 3307
// }
export const dbconnection = mysql.createConnection(
{   
    host:'localhost',
    user:'malavp',
    password:'Praveen@20',
    database:'test'
    
    // host:process.env.DB_HOST,
    // user:process.env.DB_USER,
    // password:process.env.DB_PASS,
    // database:process.env.MYSQL_DB
});

dbconnection.connect((error) =>{                            //databse connection check
    if(error) throw error;
    else console.log('Database connected Successfully.');
})
