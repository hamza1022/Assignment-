const mongoose = require("mongoose");

const Order = require('../Schemas/order.Schema');



const getallOrders = async () => {
  const orders = await Order.find();
  return {
    message: "SUCCESS",
    data: orders,

  };
};
const getOrderInfo = async () => {

    const aggregation = [
  
        [
            {
              '$lookup': {
                'from': 'users', 
                'localField': 'customerId', 
                'foreignField': '_id', 
                'as': 'User'
              }
            }, {
              '$lookup': {
                'from': 'products', 
                'localField': 'productId', 
                'foreignField': '_id', 
                'as': 'Products'
              }
            }, {
              '$project': {
                '__v': 0, 
                'orderAmount': 0, 
                'orderStatus': 0, 
                'paidAmount': 0, 
                'Products.productQuantity': 0, 
                'Products.productUploadBy':0,
                'Products.productNumber': 0, 
                'User.lastName': 0, 
                'User.city': 0, 
                'User.status': 0, 
                'User.__v': 0, 
                'User.state': 0, 
                'User.userType': 0, 
                'User.userDetails': 0, 
                'Products.__v': 0, 
                'customerId': 0, 
                'productId': 0, 
                'User._id': 0, 
                'Products._id': 0
              }
            }
          ]
  
    ];
    const product = await Order.aggregate(aggregation);
    return {
      message: "SUCCESS",
      data: product,
  }
  }

// const getOrderInfo = async () => {

//   const aggregation = [

//     [
//       {
//         '$lookup': {
//           'from': 'users', 
//           'localField': 'orderUploadBy', 
//           'foreignField': '_id', 
//           'as': 'User'
//         }
//       }, {
//         '$project': {
//           'User._id': 0, 
//           'User.lastName': 0, 
//           'User.city': 0, 
//           'User.state': 0, 
//           'User.status': 0, 
//           'User.userType': 0, 
//           'User.userDetails': 0, 
//           'User.__v': 0
//         }
//       }
//     ]

//   ];
//   const order = await Order.aggregate(aggregation);
//   return {
//     message: "SUCCESS",
//     data: order,
// }
// }

const createOrder = async (newOrder) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    paidAmount: newOrder.paidAmount,
    orderStatus: newOrder.orderStatus,
    orderAmount: newOrder.orderAmount,
    productId: newOrder.productId,
    customerId: newOrder.customerId,

  });

  const createOrder = await order.save()
  return {
    message: "SUCCESSFULLY Created",
    data: createOrder,
  };
};

const updateOrder = async (orderID, newdata) => {
  const updatedOrder = await Order.updateOne({_id:orderID}, newdata);
  return {
    message: "SUCCESSFULLY Updated",
    data: newdata,
  };
};

const deleteOrder = async (orderID) => {
  const deletedOrder = await Order.deleteOne({_id:orderID});
  return {
    message: "SUCCESSFULLY Deleted",
  };
}


// const updateMany = async (newdata) => {
//   const updatedOrder = await Order.updateMany({department:"cs"}, newdata);
//   return {
//     message: "SUCCESSFULLY Updated",
//     data: newdata,
//   };
// };

// const deleteMany = async () => {
//   const deletedOrder = await Order.deleteMany({rollnumber:209});
//   return {
//     message: "SUCCESSFULLY Deleted",
//   };
// };
// const getOnebyID = async (orderId) => {
//     const order = await Order.findById(orderId);
//     try {
//       return order;
//     } catch (err) {
//      return err;
//     }
    // return {
    //   message: "SUCCESS",
    //   data: order,
    // };
//   };
  
  // const getAOrderById = async (orderId) => {
  //   const order = await Order.findOne({ _id: orderId });
  //   return {
  //     message: "SUCCESS",
  //     data: order,
  //   };
  // };

  // const getAOrderById = async (orderId) => {
//   const order = await Order.findOne({ _id: orderId });
//   return {
//     message: "SUCCESS",
//     data: order,
//   };
// };


module.exports = {
  createOrder,
  getallOrders,
  updateOrder,
  deleteOrder,
  getOrderInfo,
//   getOrderInfo,
  //   getOnebyID,
  // getAOrderById,
};