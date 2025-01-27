const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Src/Routes/book.route");

//   mongodb://0.0.0.0/books
//   mongodb://localhost:27017/books
//   We can Write Both For Database Connection 
mongoose.connect('mongodb://localhost:27017/books').then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("not connected to database",err);
});

const app = express();

app.use("/api", userRoute);
app.listen(3000,
    () => {
        console.log("Server is running on port 3000");
    }
)
