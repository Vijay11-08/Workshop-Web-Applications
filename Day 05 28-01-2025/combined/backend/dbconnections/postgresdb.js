const Pool = require('pg').Pool; 

function connecetionObj ( ) {
  const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "playerdb",
    password : "-------------",
    port : 5432 , // default port for PostgreSQL
    max : 20,
  });
  return pool;  // return the connection object to use in your app
}

module.exports = {  connecetionObj } ; 
