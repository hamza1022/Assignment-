const mongoose = require("mongoose");

const Student = require("../Schemas/student.Schema");



const getallStudents = async () => {
  const students = await Student.find();
  return {
    message: "SUCCESS",
    data: students,

  };
};


const getOnebyID = async (studentId) => {
  const student = await Student.findById(studentId);
  try {
    return student;
  } catch (err) {
   return err;
  }
  // return {
  //   message: "SUCCESS",
  //   data: student,
  // };
};

// const getAUserById = async (userId) => {
//   const user = await User.findOne({ _id: userId });
//   return {
//     message: "SUCCESS",
//     data: user,
//   };
// };


const createStudent = async (newStudent) => {

  const student = new Student({
    _id: mongoose.Types.ObjectId(),
    name: newStudent.name,
    rollnumber: newStudent.rollnumber,
    department: newStudent.department
  });
  const createStudent = await student.save();
  return {
    message: "SUCCESSFULLY Created",
    data: createStudent,
  };
};

// const getAStudentById = async (userId) => {
//   const student = await Student.findOne({ _id: userId });
//   return {
//     message: "SUCCESS",
//     data: student,
//   };
// };

const update = async (studentID, newdata) => {
  const updatedStudent = await Student.updateOne({_id:studentID}, newdata);
  return {
    message: "SUCCESSFULLY Updated",
    data: newdata,
  };
};

const deleteStudent = async (studentID) => {
  const deletedStudent = await Student.deleteOne({_id:studentID});
  return {
    message: "SUCCESSFULLY Deleted",
  };
};

module.exports = {
  createStudent,
  getallStudents,
  getOnebyID,
  // getAStudentById,
  update,
  deleteStudent
};