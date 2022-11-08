const express = require('express');

const {getAll,getOne,addUser,updateUser,deleteUser,getOneByName} =require('./services')


// const PORT= 4200
const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("express started from today")

})

app.get('/about' , (req, res)=>{

  res.status(200). send("you are now at my about page")

})

//  Get All data
app.get('/getAll',(req,res)=>{
  const allusers = getAll()
  res.send(allusers)

})

//  Get one by id
 app.get('/:userId',(req,res)=>{

  const userId = req.params.userId

  const user =  getOne(userId)
  res.send(user)
 })

//  Get One By Name
 app.get('/byName/:Name',(req,res)=>{

  const name = req.params.Name

  const user =  getOneByName(name)
  res.send(user)
 })
//  Add a user to data base  

 app.post('/user',(req,res)=>{

  const user = req.body

  const newUser = addUser(user)
  
  res.send(newUser)

 })


//  Update a User
app.put('/edit/:userId',(req , res)=>{
// console.log('yes');
  const userId = req.params.userId
  const newData = req.body
  // console.log('->',userId, newData);
  const updatedUser = updateUser(userId,newData) 
  res.send(updatedUser)

})

//  Delete a User

app.delete('/:id',(req, res)=>{

  const userID = req.params.id

  const deletedUser = deleteUser (userID)

  res.send(deletedUser)

})

app.use ((req, res)=>{

  

})



//    2nd way of started server
// app.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`)
//   })

// 1st way 
  app.listen(5000,()=>{
    console.log("Server started on port 5000");
  })