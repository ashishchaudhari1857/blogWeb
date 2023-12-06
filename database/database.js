const  mysql =require("mysql2");

const pool =mysql.createPool({
    host:"localhost",
    user:"root",
    database:"blogs",
    password:"Ashish@123"
})


module.exports=pool.promise();
