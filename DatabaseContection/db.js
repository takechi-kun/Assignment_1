const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pantip_recruit',
    password: "1234"
  });

  module.exports = connection.promise()