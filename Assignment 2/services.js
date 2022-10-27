const fs = require('fs')



// show all users in file 
const getAll = () => {

    let users = fs.readFileSync('users.json', 'utf8')
    return JSON.parse(users)
}

const getOne = userId => {

     const users = getAll()

    userId = Number(userId)
    console.log(users)

    return users.find(user => user.id == userId) || "user id dont exist"


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

    return  !find ? "user id dont exist" :"updated Successfuly"
    


}

const deleteUser = (userID)=>{

    let users = getAll()

    let find = users.find(user => user.id==userID) 
    const index = users.indexOf(find);
    users.splice(index,1)

    
    fs.writeFileSync('users.json',JSON.stringify(users),'utf-8')
     
    return  !find ? "user id dont exist" :"Deleted Successfuly"


}



module.exports = {
    getAll: getAll,
    getOne: getOne,
    addUser:addUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
}