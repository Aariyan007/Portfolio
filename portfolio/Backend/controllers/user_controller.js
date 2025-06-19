const User = require('../model/schema');


const test = (req,res) =>{
    res.json("Test Working");
}

const registerUser = async(req,res)=>{
    try{
        const{name,email,message} = req.body;
        if(!name){
            return res.json({
                error:'Name is Required'
            })
        }
         if(!message){
            return res.json({
                error:'Type Something cool in Message'
            })
        }
        const check = await User.findOne({email})
        if(check){
            res.json("Daym Welcome Again");
        }
        const user = await User.create({name,email,message});
        return res.json(user);
    }
    catch(err){
        console.error("Something Went Wrong Try Again : ",err)
    }
}

module.exports = {
    test,
}