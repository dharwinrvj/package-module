const express=require('express');
const router=express.Router();
//add faculty
router.get('/addstudent',(req,res)=>{
    res.render('admin/addstudent');
})
module.exports=router;