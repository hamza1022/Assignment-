
const fs = require('fs')

const StudentModel= require('../models/students.model')

  const getallStudents = async (req, res, next) => {
    const { message, data } = await StudentModel.getallStudents();
    return res.status(201).json({
      message: message,
      data: data,
    });
  };



  // const getOnebyId = async (req, res, next) => {
  //   const  studentID  = req.params.studentID;
  //   const { message, data } = await StudentModel.getOnebyID(studentID);
  //   return res.status(201).json({
  //     message: message,
  //     data: data,
  //   });
  // };
  const getOnebyId =  (req, res, next) => {
    const  studentID  = req.params.studentID;
    const Students =  StudentModel.getOnebyID(studentID);
    Students.then((response)=>{
  
      return res.status(200).json({
        message: "Successfully Get One",
        data: response,
      });
    }).catch((err)=>{
     
        return res.status(500).json({
          message: "Error while getting students",
          errror: err,
        })
  
    })
  };

  const addnewStudent = async (req, res, next) => {
    // const newstudents = req.body;
    const { message, data } = await StudentModel.createStudent(req.body);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };  

  const updateStudent = async (req, res, next) => {
    const { studentID } = req.params;
    const newdata = req.body;
    const { message, data } = await StudentModel.update(studentID, newdata);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const deletedStudent = async (req, res, next) => {
    const { studentID } = req.params;
    const { message } = await StudentModel.deleteStudent(studentID);
    return res.status(201).json({
      message: message,
    });
  };


// const deleteStudent = (studentId) => {


//     const students = getallStudents();

//     let find = students.find(student => student.id==studentId) 
//     const index = students.indexOf(find);
//     students.splice(index,1)

    
//     fs.writeFileSync('students.json',JSON.stringify(students),'utf-8')
     
//     return  !find ? "Student id dont exist" :" Student Deleted Successfuly"

// }



module.exports = {
    addnewStudent:addnewStudent,
    getallStudents: getallStudents,
    getOnebyId:getOnebyId,
    // addStudent: addStudent,
    updateStudent:updateStudent,
    deletedStudent:deletedStudent,
}