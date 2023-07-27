const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const AuthHeader = req.headers.authorization;

    if(!AuthHeader)
    {   
        res.status(401).send("Invalid credentials");
    }
    else
    {
        const token = AuthHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                res.status(403).send(err, "Invalid credentials");
            }
            else{
                
                next();
            }
        })
    }
}