const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
   {
        _id: mongoose.Schema.Types.ObjectId,
        paidAmount: {type:Number},
        orderStatus : {type:String},
        orderAmount: {type:Number},
        productId: {
            ref: 'product',
            type: mongoose.Schema.Types.ObjectId
          },
          customerId:{
            ref: 'user',
            type: mongoose.Schema.Types.ObjectId
          }

    });

module.exports = mongoose.model("order", orderSchema);


