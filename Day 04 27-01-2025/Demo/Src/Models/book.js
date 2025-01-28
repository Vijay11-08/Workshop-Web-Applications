const  mongoose  = require("mongoose");

const bookSchema = new mongoose.Schema({
    name : {type: String},
    qty :{type: Number},
});

module.exports = mongoose.model('Book',bookSchema);
