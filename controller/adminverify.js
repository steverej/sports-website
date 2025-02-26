const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.adminverify = (req, res) => {
    

    const { name, email, key } = req.body;

    // Check if the key matches the required value
    if (key === "123qaz") {
        // Key is valid, proceed with the database query
        db.query('INSERT INTO adminlogin SET ?', { name: name, email: email }, (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).send("Internal Server Error");
            } else {
                
                return res.redirect("/admin");
            }
        });
    } else {
        // Key is invalid, send an error response
        return res.status(403).send("Invalid key");
    }
}