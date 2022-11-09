

const ProductModel = require('../models/product.Model')
const UserModel = require('../models/user.Model');

const getallProduct = async (req, res, next) => {
  const { message, data } = await ProductModel.getallProducts();
  return res.status(201).json({
    message: message,
    data: data,
  });
};

const getInfo = async (req,res,next) => {
  const { message, data } = await ProductModel.getProductInfo();
  return res.status(201).json({
    message: message,
    data:data
});

};



  const addnewProduct = async (req, res, next) => {
    // const newstudents = req.body;
    const { message, data } = await ProductModel.createProduct(req.body);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const updatedProduct = async (req, res, next) => {
    const { productID } = req.params;
    const newdata = req.body;
    const { message, data } = await ProductModel.updateProduct(productID, newdata);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const deletedProduct = async (req, res, next) => {
    const { productID } = req.params;
    const { message } = await ProductModel.deleteProduct(productID);
    return res.status(201).json({
      message: message,
    });
  };

  //   const updateManyProduct = async (req, res, next) => {
  //     const newdata = req.body;
  //     const { message, data } = await ProductModel.updateMany(newdata);
  //     return res.status(201).json({
  //       message: message,
  //       data: data,
  //     });
  //   };

  //   const deleteManyProduct = async (req, res, next) => {
  //     const { message } = await ProductModel.deleteMany();
  //     return res.status(201).json({
  //       message: message,
  //     });
  //   };

  // const getOnebyId =  (req, res, next) => {
  //     const  studentID  = req.params.studentID;
  //     const Products =  ProductModel.getOnebyID(studentID);
  //     Products.then((response)=>{

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
  //   const { message, data } = await ProductModel.getOnebyID(studentID);
  //   return res.status(201).json({
  //     message: message,
  //     data: data,
  //   });
  // };

  module.exports = {
    getallProduct,
    addnewProduct,
    updatedProduct,
    deletedProduct,
    getInfo,
    // updateManyProduct:updateManyProduct,
    // deleteManyProduct:deleteManyProduct
    // addProduct: addProduct,
    //  getOnebyId:getOnebyId,
  }