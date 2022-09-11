import  jwt  from "jsonwebtoken";

export const checkToken = (req,res,next) =>{
    
    // return false
    let token = req.headers.authorization; 

    let jwtSecretKey = process.env.jwtSecretKey;
    
    // return false
    //req.get("Authorization");
    if (token == null) return res.sendStatus(401)

    token = token.split(' ')[1];
    // jwt.verify(token,'SECRET_KEY',(error, user) =>{
    jwt.verify(token,jwtSecretKey,(error, user) =>{
        // console.log(user);
        
        if(error)
          return res.status(403).json({
                success:false,
                message:error.message,
            });

        req.user = user;
        // console.log(user);



        next();
        
    
            
    });
}


