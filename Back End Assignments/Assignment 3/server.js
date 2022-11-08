const express = require('express')
const mongoose = require('mongoose');
const PORT = 7000

const app = express();
// const {getAll} =require('./controller/studentController');

const DB= 'mongodb+srv://hamza:Hamzadb101@cluster0.77c93bv.mongodb.net/?retryWrites=true&w=majority' ; 

mongoose.connect(DB, {
  // useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true, 

}).then (()   => {
  console.log ("Successfuly Connected With Database");
}).catch((error)=> {
  console.log("No Connection");
});


app.use(express.json({ extended: false }))
app.get('/', (req, res)=>{
  res.send("express started from today")

})


const studentRouter = require('./routes/student.Route');
const teacherRouter = require('./routes/teacher.Route');
const classRouter = require('./routes/class.Route');

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/class", classRouter);


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
  })