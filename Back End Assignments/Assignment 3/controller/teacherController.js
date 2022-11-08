
const fs = require('fs')


const getallTeacher = () => {
    console.log("hidaa");

    let teachers = fs.readFileSync('./teachers.json', 'utf8')
    console.log(teachers);
    return JSON.parse(teachers)
}

const addTeacher = (student) => {

    const teachers = getallTeacher();
    teachers.push(student);
    fs.writeFileSync('teachers.json', JSON.stringify(teachers), 'utf-8')
    return "Teacher Added sucessfully"

}

const updateTeacher = (studentId, updatedTeacher) => {


    const teachers = getallTeacher();

    let find = teachers.find(student=> student.id==studentId) 

    for (let key in find){

        find[key] = updatedTeacher[key]

    }
    // console.log(users)

    fs.writeFileSync('teachers.json',JSON.stringify(teachers),'utf-8')

    return  !find ? "Teacher id dont exist" :"Teacher Updated Successfuly"

}
const deleteTeacher = (studentId) => {


    const teachers = getallTeacher();

    let find = teachers.find(student => student.id==studentId) 
    const index = teachers.indexOf(find);
    teachers.splice(index,1)

    
    fs.writeFileSync('teachers.json',JSON.stringify(teachers),'utf-8')
     
    return  !find ? "Teacher id dont exist" :" Teacher Deleted Successfuly"

}



module.exports = {
    getallTeacher: getallTeacher,
    addTeacher: addTeacher,
    updateTeacher:updateTeacher,
    deleteTeacher:deleteTeacher,
}