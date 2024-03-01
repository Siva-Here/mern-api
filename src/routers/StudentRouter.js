const express=require('express')
const router=new express.Router()
const Student=require('../models/students')

router.get("/students",async(req,res)=>{
    try{
        const students=await Student.find().select({_id:0});
        res.json(students)
    }
    catch(err){
        console.log(err);
        res.status(500).send('Server Error');
    }
})

router.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post("/students",async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUSer=await user.save();
        res.status(201).send(createUSer);
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.put("/students/:id",async(req,res)=>{
    try{
        const _id =req.params.id
        const updatedStudents=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updatedStudents);
    }
    catch(err){
        res.status(404).send(err)
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id =req.params.id
        const deleteStudent=await Student.findByIdAndDelete({_id})
        if(!req.params.id){
            return res.status(400).send();
        }
        res.status(200).send(deleteStudent)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports=router