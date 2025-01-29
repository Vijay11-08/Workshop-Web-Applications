const p1 = require("../dbconnections/postgresdb");
const c1 = p1.connecetionObj();
// c1 is object of database connection
const funct1 = (req,res) => {
    console.log("Function 1 Is Called");
    res.send("Function 1 Is Response");
}
const funct2 = (req,res) => {
    console.log("Function 2 Is Called");
    res.send("Function 2 Is Response");
}

const funct3 = (req,res) => {
    var v1 = req.body.var1;
    var v2 = req.body.var2;
    var v3 = req.body.var3;
    try {
       c1.query (
        `INSERT INTO public.player1( pl_nm, pl_run, pl_country) VALUES ( '${v1}', ${v2} , '${v3}');`,
       (error, result) => {
        if (error)
            console.log(error);
        else
            {
                console.log("Insert Player Data Success");
                res.send("Insert Player Data Successfully In database");
            }
       }) ;
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


const funct4 = (req,res) => {
    // INSERT INTO public.player1(
    //     pl_id, pl_nm, pl_run, pl_country)
    //     VALUES (?, ?, ?, ?);

    // Insert query into public.player1 table
    try {
       
       c1.query (
        "SELECT * FROM public.player1;"
       ,(error, result) => {
        if (error)
            console.log(error);
        else
            {
                console.log("Select Player Data Success");
                res.send("Select Player Data Successfully In database");
            }
       }) ;
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error in Function 04' );
    }
};

module.exports = {
    funct1: funct1,
    funct2: funct2,
    funct3: funct3,
    funct4: funct4,
}