const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.shop = async(req, res) => {
    db.query('SELECT * FROM shoptable', async(err, result) => {
      if(err){
          console.log(err)
      }
      else{
          res.render('shop.hbs', {
            shop: result
          });
      }
    });  
  };

  exports.updateShop= (req, res) => {
    const { productname, price, shopTable } = req.body;
    console.log(shopTable);
    const upSql='UPDATE shoptable SET ? WHERE id = ?';
    db.query(upSql,[ { productname, price},shopTable],
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