
const fs = require('fs')

const  {getallStudents} =require('./studentController');
const  {getallTeacher} =require('./teacherController');



 const  getAll = () => {
    console.log("hidaa");

    let classes = fs.readFileSync('./classes.json', 'utf8')
    console.log(classes);
    return JSON.parse(classes)
}


const addClass = (classroom,teacherId) => {

    const teachers = getallTeacher();
    const classes = getAll();
    const allstudents = getallStudents();

    let teacherID = teachers.find(teacher => teacher.id==teacherId)

    classroom['students'] = allstudents;
    classroom['teacher'] =  teacherID;

    classes.push(classroom);
    fs.writeFileSync('classes.json', JSON.stringify(classes,null, "\t"), 'utf-8')
    return "Class Added sucessfully"

}

const updateClass = (classroomId, updatedClass) => {


    const classes = getAll();

    let find = classes.find(classroom=> classroom.id==classroomId) 

    for (let key in find){

        find[key] = updatedClass[key]

    }
    // console.log(users)

    fs.writeFileSync('classes.json',JSON.stringify(classes),'utf-8')

    return  !find ? "Class id dont exist" :"Class Updated Successfuly"

}
const deleteClass = (classroomId) => {


    const classes = getAll();

    let find = classes.find(classroom => classroom.id==classroomId) 
    const index = classes.indexOf(find);
    classes.splice(index,1)

    
    fs.writeFileSync('classes.json',JSON.stringify(classes),'utf-8')
     
    return  !find ? "Class id dont exist" :" Class Deleted Successfuly"

}



module.exports = {
    getAll: getAll,
    addClass: addClass,
    updateClass:updateClass,
    deleteClass:deleteClass,
}