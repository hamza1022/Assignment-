const express = require('express');

const {getAll,addClass,updateClass,deleteClass} =require('../controller/classController');

const router = express.Router();


router.get('/all', (req,res)=>{

    res.send( getAll() );
});


router.post('/create/:teacherId', (req,res)=> {

    const classroom = req.body;
  
    const teacherId = req.params.teacherId

    res.send ( addClass(classroom,teacherId) );

});

router.put('/update/:classroomid', (req,res)=> {

    const classroomId = req.params.classroomid; 

    const updatedClass = req.body;

    res.send ( updateClass(studentId, updatedClass) );

});

router.delete('/delete/:studentid', (req,res)=> {

    const studentId = req.params.studentid; 


    res.send ( deleteClass(classroomId) );

});


module.exports = router;