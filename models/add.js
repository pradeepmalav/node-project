
import bodyParser from 'body-parser';
import pkg from 'express';
const express = pkg;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.json());
import bcrypt from 'bcrypt';

app.post('/',(req,res) =>{
    const {password} = req.body;
    console.log(req.body);


    
    bcrypt.hash(password,10,(errror,hash) =>
    {
        if(errror){
            res.json({
                success:false,
                message:'error'                
            })
        }
        else{
            res.json({
                success:true,
                message:'Encrypted password',
                password:hash
            })
        }
        
    })
});

app.listen(6000, () =>{console.log('Server running on 6000...')})