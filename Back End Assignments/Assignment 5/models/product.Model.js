const mongoose = require("mongoose");

const Product = require('../Schemas/product.Schema');
const User = require ('../Schemas/user.Schema');

const getallProducts = async () => {
  const products = await Product.find();
  return {
    message: "SUCCESS",
    data: products,

  };
};

const getProductInfo = async () => {

  const aggregation = [

    [
      {
        '$lookup': {
          'from': 'users', 
          'localField': 'productUploadBy', 
          'foreignField': '_id', 
          'as': 'User'
        }
      }, {
        '$project': {
          'User._id': 0, 
          'User.lastName': 0, 
          'User.city': 0, 
          'User.state': 0, 
          'User.status': 0, 
          'User.userType': 0, 
          'User.userDetails': 0, 
          'User.__v': 0
        }
      }
    ]

  ];
  const product = await Product.aggregate(aggregation);
  return {
    message: "SUCCESS",
    data: product,
}
}

const createProduct = async (newProduct) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    productName: newProduct.productName,
    productPrice: newProduct.productPrice,
    productQuantity: newProduct.productQuantity,
    productNumber: newProduct.productNumber,
    productUploadBy: newProduct.productUploadBy,

  });

  const createProduct = await product.save()
  return {
    message: "SUCCESSFULLY Created",
    data: createProduct,
  };
};

const updateProduct = async (productID, newdata) => {
  const updatedProduct = await Product.updateOne({_id:productID}, newdata);
  return {
    message: "SUCCESSFULLY Updated",
    data: newdata,
  };
};

const deleteProduct = async (productID) => {
  const deletedProduct = await Product.deleteOne({_id:productID});
  return {
    message: "SUCCESSFULLY Deleted",
  };
}


// const updateMany = async (newdata) => {
//   const updatedProduct = await Product.updateMany({department:"cs"}, newdata);
//   return {
//     message: "SUCCESSFULLY Updated",
//     data: newdata,
//   };
// };

// const deleteMany = async () => {
//   const deletedProduct = await Product.deleteMany({rollnumber:209});
//   return {
//     message: "SUCCESSFULLY Deleted",
//   };
// };
// const getOnebyID = async (productId) => {
//     const product = await Product.findById(productId);
//     try {
//       return product;
//     } catch (err) {
//      return err;
//     }
    // return {
    //   message: "SUCCESS",
    //   data: product,
    // };
//   };
  
  // const getAProductById = async (productId) => {
  //   const product = await Product.findOne({ _id: productId });
  //   return {
  //     message: "SUCCESS",
  //     data: product,
  //   };
  // };

  // const getAProductById = async (productId) => {
//   const product = await Product.findOne({ _id: productId });
//   return {
//     message: "SUCCESS",
//     data: product,
//   };
// };


module.exports = {
  createProduct,
  getallProducts,
  updateProduct,
  deleteProduct,
  getProductInfo,
  //   getOnebyID,
  // getAProductById,
};