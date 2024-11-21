const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'root123', 
  database: 'school_management'
});

module.exports = pool.promise();
