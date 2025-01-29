const registerModel = require('../Models/register');

exports.getRegister = async (req ,res ) =>{
    const register = await registerModel.find();
    res.status(200).json({status:true,msg:register});
}

exports.addRegister = async (req ,res ) =>{
    const register = new registerModel({name:req.body.name, qty :req.body.qty});
    await register.save();
    res.status(200).json({status:true,msg:register,success:"Creates new register"});
};
