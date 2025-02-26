const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.turf = async (req, res) => {
    db.query('SELECT * FROM turftable', async (err, result) => {
        if (err) {
            console.log(err)
        }
        else {

            res.render('turf.hbs', {
                turf: result
            });
        }
    });
};

exports.updateTurf = async (req, res) => {
    const { name, date, time, slot, turfTable } = req.body;
    console.log(turfTable);
    const upSql='UPDATE turftable SET ? WHERE id = ?';
    db.query(upSql,[ { name, date, time, slot},turfTable],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.affectedRows === 1) {
                    console.log("Record updated successfully!");
                } else {
                    console.log("Update failed. No rows affected.");    
                }
                res.redirect('/admin');
            }
        }
    );

};