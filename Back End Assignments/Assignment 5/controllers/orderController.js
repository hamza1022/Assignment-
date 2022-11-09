
// const ProductModel = require('../models/product.Model')
// const UserModel = require('../models/user.Model');
const OrderModel = require('../models/order.Model');


const getallOrder = async (req, res, next) => {
  const { message, data } = await OrderModel.getallOrders();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const getInfo = async (req,res,next) => {
  const { message, data } = await OrderModel.getOrderInfo();
  return res.status(201).json({
    message: message,
    data:data
});
};



  const addnewOrder = async (req, res, next) => {
    // const newstudents = req.body;
    const { message, data } = await OrderModel.createOrder(req.body);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const updatedOrder = async (req, res, next) => {
    const { orderID } = req.params;
    const newdata = req.body;
    const { message, data } = await OrderModel.updateOrder(orderID, newdata);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const deletedOrder = async (req, res, next) => {
    const { orderID } = req.params;
    const { message } = await OrderModel.deleteOrder(orderID);
    return res.status(201).json({
      message: message,
    });
  };

  //   const updateManyOrder = async (req, res, next) => {
  //     const newdata = req.body;
  //     const { message, data } = await OrderModel.updateMany(newdata);
  //     return res.status(201).json({
  //       message: message,
  //       data: data,
  //     });
  //   };

  //   const deleteManyOrder = async (req, res, next) => {
  //     const { message } = await OrderModel.deleteMany();
  //     return res.status(201).json({
  //       message: message,
  //     });
  //   };

  // const getOnebyId =  (req, res, next) => {
  //     const  studentID  = req.params.studentID;
  //     const Orders =  OrderModel.getOnebyID(studentID);
  //     Orders.then((response)=>{

  //       return res.status(200).json({
  //         message: "Successfully Get One",
  //         data: response,
  //       });
  //     }).catch((err)=>{

  //         return res.status(500).json({
  //           message: "Error while getting students",
  //           errror: err,
  //         })

  //     })
  //   };

  // const getOnebyId = async (req, res, next) => {
  //   const  studentID  = req.params.studentID;
  //   const { message, data } = await OrderModel.getOnebyID(studentID);
  //   return res.status(201).json({
  //     message: message,
  //     data: data,
  //   });
  // };

  module.exports = {
    getallOrder,
    addnewOrder,
    updatedOrder,
    deletedOrder,
    getInfo,
    // updateManyOrder:updateManyOrder,
    // deleteManyOrder:deleteManyOrder
    // addOrder: addOrder,
    //  getOnebyId:getOnebyId,
  }