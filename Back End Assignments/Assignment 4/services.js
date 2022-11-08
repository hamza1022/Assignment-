const fs = require('fs')



// show all users in file 
// const getAll = () => {

//     // const url = req.originalUrl;
//     // const method = req.method 

//     let students = fs.readFileSync('students.json', 'utf8')
//     return JSON.parse(students)
// }

const getOne = userId => {

     const users = getAll()

    userId = Number(userId)
    console.log(users)

    return users.find(user => user.id == userId) || "user id dont exist"

}
const getOneByName = (name) => {

    const users = getAll()

//    userId = Number(userId)
   console.log(users)

   return users.find(user => user.name == name) || " Name dont exist"

}

const addUser = user =>{

    let users = getAll();

    users.push(user)

  fs.writeFileSync('users.json',JSON.stringify(users),'utf-8')
return "User Added sucessfully"
}

const updateUser=(userId,newData)=>{

    let users = getAll();
    let find = users.find(user=> user.id==userId) 

    for (let key in find){

        find[key] = newData[key]

    }
    // console.log(users)

    fs.writeFileSync('users.json',JSON.stringify(users),'utf-8')

    return  !find ? "User id dont exist" :"Updated Successfuly"
    
}

const deleteUser = (userID)=>{

    let users = getAll()

    let find = users.find(user => user.id==userID) 
    const index = users.indexOf(find);
    users.splice(index,1)

    
    fs.writeFileSync('users.json',JSON.stringify(users),'utf-8')
     
    return  !find ? "User id dont exist" :"Deleted Successfuly"


}



module.exports = {
    getAll: getAll,
    // getOne: getOne,
    // addUser:addUser,
    // updateUser:updateUser,
    // deleteUser:deleteUser,
    // getOneByName:getOneByName,
}