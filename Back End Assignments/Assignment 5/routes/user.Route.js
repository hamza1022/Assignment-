const express = require('express');

const  UserController  =  require('../controllers/userController') 

const router = express.Router();

router.get("/findAll", UserController.getallUser);

router.get("/findActve",UserController.findActive);

router.get("/findAdmin",UserController.findAdmin);

router.get("/findCustomer",UserController.findCustomer);

router.post("/create",UserController.addnewUser);

router.put("/update/:userID",UserController.updatedUser);

router.delete("/delete/:userID",UserController.deletedUser);

//  router.get("/:userID", UserController.getOnebyId);

//  router.put("/updatemany" ,UserController.updateManyUser);

//  router.delete("/deletemany", UserController.deleteManyUser);



module.exports= router;