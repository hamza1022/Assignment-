const express = require('express');

const  ProductController  =  require('../controllers/productController') ;
const UserController = require('../controllers/userController');

const router = express.Router();

router.get("/findAll", ProductController.getallProduct);

router.get("/info", ProductController.getInfo );

router.post("/create",ProductController.addnewProduct );

router.put("/update/:userID",ProductController.updatedProduct );

router.delete("/delete/:userID",ProductController.deletedProduct );

//  router.get("/:userID", Product Controller.getOnebyId);

//  router.put("/updatemany" ,Product Controller.updateManyProduct );

//  router.delete("/deletemany", Product Controller.deleteManyProduct );



module.exports= router;