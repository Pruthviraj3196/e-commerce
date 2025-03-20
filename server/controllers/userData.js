const userModel = require("../models/userData");

const signup = async (req, res) => {
   
    try {

    const {firstName,lastName,email,password,address} = req.body;

    if(!firstName||!lastName||!email||!password||!address){
       return  res.json({
            message:"Please provide all the required data"
        })
    }

    const userinfo = await userModel.findOne({email: req.body.email})

    if(userinfo){
        return res.json({
            message:"user Already Register please login"
        })
    } 
 
    const user = new userModel(req.body);
    const newUser = await user.save()
    console.log(user)

    res.json({
        message:"user created successfully"
    })
        
    } catch (error) {
        console.log(error)
    }
}



const login = async (req, res) => {

    try {
        
        const userinfo = await userModel.findOne({email: req.body.email});
        console.log(userinfo)

        if(!userinfo){
            return res.json({
                message: "Account not Found Resgister"
            })
        }
    
       const isPassword = await userinfo.password;
       console.log("cheack",isPassword);
       
       
       if(isPassword !== req.body.password){
        return res.json({
            message:"Please check userId or Password"
        })
       }
    
        res.json({
            message:"user is login sucessfully"
        })

    } catch (error) {
        console.log(error);
        
    }
}

const userController = {
    signup,
    login,
}

module.exports = userController;