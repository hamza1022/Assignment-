const express = require('express');


const OrderController=require('../controllers/orderController');

const router = express.Router();

router.get("/findAll", OrderController.getallOrder);

router.post("/create",OrderController.addnewOrder );

router.put("/update/:orderID",OrderController.updatedOrder );

router.delete("/delete/:orderID",OrderController.deletedOrder );

router.get("/orderinfo", OrderController.getInfo );

//  router.get("/:orderID", Order Controller.getOnebyId);

//  router.put("/updatemany" ,Order Controller.updateManyOrder );

//  router.delete("/deletemany", Order Controller.deleteManyOrder );



module.exports= router;