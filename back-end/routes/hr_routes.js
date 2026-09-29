let express=require('express')
 let router=express.Router();
 let {users}=require('../models/users')

 router.get("/viewemployees",async(req,res)=>{
   let result=await users.find();
    res.send(result);
//open postman choose get method
//localhost:3000/api/hr/viewemployees

 })
 router.post("/assign-task",(req,res)=>{
    res.send("assign task router called")

 })
 router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called")
 })

 router.delete("/deleteemployee/:id",async(req,res)=>{
    let deleterec=await users.findByIdAndDelete(req.params.id);
    res.send(deleterec);
 })
 //open postman choose get method
//localhost:3000/api/hr/deleteemployees/(id of the record which you wanna delete)
 module.exports=router;