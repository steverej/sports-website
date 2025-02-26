const express=require('express');
const authController=require('../controller/auth');

const router=express.Router();

router.get('/home',(req,res)=> {
    res.render('home');
});

router.get('/',(req,res) => {
    res.render('signup');
});

router.get('/login',(req,res) => {
    res.render('login');
});

router.get('/shop',(req,res) => {
    res.render('shop');
});

router.get('/stadium',(req,res) => {
    res.render('stadium');
});

router.get('/turf',(req,res) => {
    res.render('turf');
});

router.get('/feedback',(req,res) => {
    res.render('feedback');
});

router.get('/adminlogin',(req,res) => {
    res.render('adminlogin');
});

router.get('/admin',authController.admin);

router.get('/deleteAP',authController.admin);
router.get('/deleteShop',authController.admin);
router.get('/deleteTurf',authController.admin);
router.get('/deleteStadium',authController.admin);
router.get('/deleteFeedback',authController.admin);
router.post('/loginverify',authController.loginverify);

module.exports=router;