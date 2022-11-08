const express = require('express');

const {getallTeacher,addTeacher,updateTeacher,deleteTeacher} =require('../controller/teacherController');

const router = express.Router();


router.get('/all', (req,res)=>{

    res.send( getallTeacher() );
});


router.post('/create', (req,res)=> {

    const teacher = req.body;

    res.send ( addTeacher(teacher) );

});

router.put('/update/:teacherid', (req,res)=> {

    const teacherId = req.params.teacherid; 

    const updatedTeacher = req.body;

    res.send ( updateTeacher(teacherId, updatedTeacher) );

});

router.delete('/delete/:teacherid', (req,res)=> {

    const teacherId = req.params.teacherid; 


    res.send ( deleteTeacher(teacherId) );

});


module.exports = router;