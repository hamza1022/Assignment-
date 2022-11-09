const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
   {
        _id: mongoose.Schema.Types.ObjectId,
        productName: {type:String},
        productPrice: {type:Number},
        productQuantity : {type:Number},
        productNumber: {type:Number},
        productUploadBy: {
            ref: 'user',
            type: mongoose.Schema.Types.ObjectId
          }

    });

module.exports = mongoose.model('product', productSchema);


