const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.stadium = async(req, res) => {
    db.query('SELECT * FROM stadiumtable', async(err, result) => {
      if(err){
          console.log(err)
      }
      else{
          res.render('stadium.hbs', {
              stadium: result
          });
      }
    });  
  };

exports.updateStadium= (req, res) => {
    const { date, time, duration, seat,name, stadiumTable } = req.body;
    console.log(stadiumTable);
    const upSql='UPDATE stadiumtable SET ? WHERE id = ?';
    db.query(upSql,[ { date, time, duration, seat,name},stadiumTable],
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