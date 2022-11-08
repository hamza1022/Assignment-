const express = require('express');
const studentController = require('../controller/studentController');

const StudnetController    =require('../controller/studentController');

const router = express.Router();



router.get("/findAll", StudnetController.getallStudents);

router.post("/create",StudnetController.addnewStudent);

 router.get("/:studentID", StudnetController.getOnebyId);

 router.put("/update/:studentID",StudnetController.updateStudent);

 router.delete("/delete/:studentID",StudnetController.deletedStudent);

 router.put("/updatemany" ,StudnetController.updateManyStudent);

 router.delete("/deletemany", StudnetController.deleteManyStudent);






// router.put('/update/:studentid', (req,res)=> {

//     const studentId = req.params.studentid; 

//     const updatedStudent = req.body;

//     res.send ( updateStudent(studentId, updatedStudent) );

// });

// router.delete('/delete/:studentid', (req,res)=> {

//     const studentId = req.params.studentid; 


//     res.send ( deleteStudent(studentId) );

// });


module.exports = router;