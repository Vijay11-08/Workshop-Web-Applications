const bookModel = require('../Models/book');

exports.getBooks = async (req ,res ) =>{
    const books = await bookModel.find();
    res.status(200).json({status:true,msg:books});
}

exports.addBooks = async (req ,res ) =>{
    const books = new bookModel({name:req.body.name, qty :req.body.qty});
    await books.save();
    res.status(200).json({status:true,msg:books,success:"Creates new book"});
};