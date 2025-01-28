const  mongoose  = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {type: String},
    qty :{type: Number},
});

module.exports = mongoose.model('Register',registerSchema);
