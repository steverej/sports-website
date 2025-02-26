const express=require('express');
const authController=require('../controller/auth');
const adminverifyController=require('../controller/adminverify');
const shopController=require('../controller/shop');
const turfController=require('../controller/turf');
const stadiumController=require('../controller/stadium');
const router=express.Router();



router.post('/register', authController.register);
router.post('/adminverify',adminverifyController.adminverify);
router.get('/shop',shopController.shop);
router.get('/turf',turfController.turf);
router.get('/stadium',stadiumController.stadium);

router.post('/updateShop',shopController.updateShop);
router.post('/updateTurf',turfController.updateTurf);
router.post('/updateStadium',stadiumController.updateStadium);


module.exports=router;