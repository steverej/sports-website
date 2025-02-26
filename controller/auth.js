const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.register = (req, res) => {
    console.log(req.body);

    if (req.body.email && req.body.number && req.body.password && req.body.confirmpassword) {

    const { name, email, number, password, confirmpassword} = req.body;

    db.query("SELECT email FROM signup WHERE email = ?", [email], async (error, result) => {
        if(error){
            console.log(error);
        }

        if(result.length > 0){
            return res.render('signup',{
                message:'That email already in use'
            })
        }
        else if(password !== confirmpassword){
            return res.render('signup',{
                message: 'Password do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

       db.query('INSERT INTO signup SET ?', {name:name, email:email, number:number, password:hashedPassword}, (error, results) => {
        if(error) {
            console.log(error);
        }
        else{
            console.log(results);
            return res.redirect("/home");
        }
       });

    });

    }
    else if (req.body.feedback) {

    const { name, email, feedback} = req.body;

       db.query('INSERT INTO feedback SET ?', {name:name, email:email, feedback:feedback}, (error, results) => {
        if(error) {
            console.log(error);
        }
        else{
            console.log(results);
            return res.redirect("/");
        }
       });

    }
    
    else if (req.body.slot){
        const{ name, date, time, slot } = req.body;
        db.query('INSERT INTO turf SET ?', {name:name, date:date, time:time, slot:slot } , (error, results) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log(results);
                return res.redirect("/");
            }
           });
    }
    else if (req.body.seat) {

        const { date, time, duration,seat,name} = req.body;
    
           db.query('INSERT INTO stadium SET ?', {date:date,time:time,duration:duration,seat:seat,name:name}, (error, results) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log(results);
                return res.redirect("/");
            }
           });
    
        }
        else if (req.body.pincode) {

            const { name, email, address,pincode,phone} = req.body;
        
               db.query('INSERT INTO buy SET ?', {name:name,email:email,address:address,pincode:pincode,phone:phone}, (error, results) => {
                if(error) {
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.send("Item purchased and will arrive in 3 days.Thank you for purchasing from Sportec");
                }
               });
        
            }
            else if (req.body.key) {

                const { name, email, key} = req.body;
            
                   db.query('INSERT INTO adminlogin SET ?', {name:name,email:email,key:key}, (error, results) => {
                    if(error) {
                        console.log(error);
                    }
                    else{
                        console.log(results);
                        return res.redirect("/admin");
                    }
                   });
            
                }
            
}

exports.loginverify=(req,res)=>{
    console.log(req.body);
    const {email, password} = req.body;

    db.query('SELECT email, password FROM signup WHERE email = ?', [email], async (error, result) => {
        if(error){
            console.log(error);
        }

        if(result.length < 0){
            return res.render('signup',{
                message:'That email not found'
            })
        }
        else{
            return res.redirect('/home');
        }

    });

}


exports.admin=(req,res)=>{
    const sql= "SELECT * FROM buy";

    db.query(sql,(err,results)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(results,"shopdata");
        }
        
        //next query
      
    const sql1= "SELECT * FROM turf";
    db.query(sql1,(err,results1)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(results1,"turfdata");

            }
            //next query
            

    const sql2="SELECT * FROM stadium";
    db.query(sql2,(err,results2)=>{
               if(err){
                   console.log(err);
               }
               else{
                   console.log(results2,"stadiumdata");
                   
               }
            //next query
    const sql3= "SELECT * FROM feedback";
    db.query(sql3,(err,results3)=>{
               if(err){
                   console.log(err);
               }
               else{
                   console.log(results3,"feedback");

               }
               //next query 
    const sql8= "SELECT * FROM signup";
    db.query(sql8,(err,results8)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(results8,"SignINTable");
                    
                }
               res.render('admin.hbs',{shopdata:results,turfData:results1,stadiumdata:results2,feedbackdata:results3,signindata:results8});
            })
            })
            })
             })
          })
}
 exports.deleteShop=(req,res)=>{
    const apId= req.query.shopid;
    console.log("id",apId);
    const sql = "DELETE FROM buy WHERE id = ?";
    db.query(sql, [apId], (err, results) => {
        if (err) {
            // Handle the error
            console.error("Error deleting details:", err);
            res.status(500).send("Error deleting details");
            return;
        }

        // Check if any rows were affected by the deletion
        if (result.affectedRows === 0) {
            // If no rows were affected, it means there was no apartment with the provided ID
            res.status(404).send("Product not found");
            return;
        }

        // If the deletion was successful, send a success response
        res.redirect('/admin');
    });
}

exports.deleteTurf=(req,res)=>{
    const apId= req.query.turfId;
    console.log("id",apId);
    const sql = "DELETE FROM turf WHERE id = ?";
    db.query(sql, [apId], (err, result) => {
        if (err) {
            // Handle the error
            console.error("Error deleting details:", err);
            res.status(500).send("Error deleting details");
            return;
        }

        // Check if any rows were affected by the deletion
        if (result.affectedRows === 0) {
            // If no rows were affected, it means there was no apartment with the provided ID
            res.status(404).send("Turf not found");
            return;
        }

        // If the deletion was successful, send a success response
        res.redirect('/admin');
    });
}

exports.deleteStadium=(req,res)=>{
    const apId= req.query.stadiumId;
    console.log("id",apId);
    const sql = "DELETE FROM stadium WHERE id = ?";
    db.query(sql, [apId], (err, result) => {
        if (err) {
            // Handle the error
            console.error("Error deleting details:", err);
            res.status(500).send("Error deleting details");
            return;
        }

        // Check if any rows were affected by the deletion
        if (result.affectedRows === 0) {
            // If no rows were affected, it means there was no apartment with the provided ID
            res.status(404).send("Stadium not found");
            return;
        }

        // If the deletion was successful, send a success response
        res.redirect('/admin');
    });
}

exports.deleteFeedback=(req,res)=>{
    const apId= req.query.Feedback;
    console.log("id",apId);
    const sql ="DELETE FROM feedback WHERE id = ?";
    db.query(sql, [apId], (err, result) => {
        if (err) {
            // Handle the error
            console.error("Error deleting feedback:", err);
            res.status(500).send("Error deleting feedback");
            return;
        }

        // Check if any rows were affected by the deletion
        if (result.affectedRows === 0) {
            // If no rows were affected, it means there was no apartment with the provided ID
            res.status(404).send("id not found");
            return;
        }

        // If the deletion was successful, send a success response
        res.redirect('/admin');
    });
}