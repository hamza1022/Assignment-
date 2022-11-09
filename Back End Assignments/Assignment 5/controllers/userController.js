const UserModel= require('../models/user.Model')

  const getallUser = async (req, res, next) => {
    const { message, data } = await UserModel.getallUsers();
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const findActive = async (req,res,wait)=> {
    const { message, data } = await UserModel.getActive();
    return res.status(201).json({
      message: message,
      data: data,
    });
  }

  const findAdmin = async (req,res,wait)=> {
    const { message, data } = await UserModel.getAdmin();
    return res.status(201).json({
      message: message,
      data: data,
    });
  }
  const findCustomer = async (req,res,wait)=> {
    const { message, data } = await UserModel.getCustomer();
    return res.status(201).json({
      message: message,
      data: data,
    });
  }

  const addnewUser = async (req, res, next) => {
    // const newstudents = req.body;
    const { message, data } = await UserModel.createUser(req.body);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };  


  const updatedUser = async (req, res, next) => {
    const { userID } = req.params;
    const newdata = req.body;
    const { message, data } = await UserModel.updateUser(userID, newdata);
    return res.status(201).json({
      message: message,
      data: data,
    });
  };

  const deletedUser = async (req, res, next) => {
    const  {userID}  = req.params;
    const { message } = await UserModel.deleteUser(userID);
    return res.status(201).json({
      message: message,
    });
  };

//   const updateManyUser = async (req, res, next) => {
//     const newdata = req.body;
//     const { message, data } = await UserModel.updateMany(newdata);
//     return res.status(201).json({
//       message: message,
//       data: data,
//     });
//   };

//   const deleteManyUser = async (req, res, next) => {
//     const { message } = await UserModel.deleteMany();
//     return res.status(201).json({
//       message: message,
//     });
//   };

// const getOnebyId =  (req, res, next) => {
//     const  studentID  = req.params.studentID;
//     const Users =  UserModel.getOnebyID(studentID);
//     Users.then((response)=>{
  
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
  //   const { message, data } = await UserModel.getOnebyID(studentID);
  //   return res.status(201).json({
  //     message: message,
  //     data: data,
  //   });
  // };

module.exports = {
    getallUser,
    addnewUser,
    findActive,
    updatedUser,
    deletedUser,
    findAdmin,
    findCustomer,
    // updateManyUser:updateManyUser,
    // deleteManyUser:deleteManyUser
     // addUser: addUser,
    //  getOnebyId:getOnebyId,
}