const express = require('express');
const app = express();
const port = 4545 ;
const m1 = require('./controllers/playerdb');

// Express Objects
app.use(express.json());
app.use(express.urlencoded({ extended : true }));  // data whatever send that in post request from data encodedd

app.get("/", (req, res) => {
    res.send("Welcome to the simple Test API.....!");
});


app.get("/e1", m1.funct1);
app.get("/e2", m1.funct2);
app.get("/test3/*", m1.funct3);
app.get("/test4/*", m1.funct4);

app.listen(port , ()=>{
    console.log("listening on port " + port);
});
