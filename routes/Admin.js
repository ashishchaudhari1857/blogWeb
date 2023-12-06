const express=require("express");
const app=express();
const router=express.Router();
const adminController=require('../controllers/adminController')



router.get('/' ,adminController.fetchdata)
router.post('/add_blog' ,adminController.add_data)
router.get('/form',adminController.form)
router.get('/user/:id' ,adminController.Blogdetail)


module.exports=router;