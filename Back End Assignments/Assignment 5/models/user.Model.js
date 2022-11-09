const mongoose = require("mongoose");

const User = require("../Schemas/user.Schema");



const getallUsers = async () => {
  const users = await User.find();
  return {
    message: "SUCCESS",
    data: users,

  };
};
const getActive = async () => {

  const aggregation = [

    [
      {
        '$match': {
          'status': 'Active'
        }
      }
    ]

  ];
  const product = await User.aggregate(aggregation);
  return {
    message: "SUCCESS",
    data: product,
}
}
const getAdmin = async () => {

  const aggregation = [

    [
      {
        '$match': {
          'userType': 'isAdmin'
        }
      }
    ]

  ];
  const product = await User.aggregate(aggregation);
  return {
    message: "SUCCESS",
    data: product,
}
}

const getCustomer = async () => {

  const aggregation = [

    [
      {
        '$match': {
          'userType': 'isCustomer'
        }
      }
    ]

  ];
  const product = await User.aggregate(aggregation);
  return {
    message: "SUCCESS",
    data: product,
}
}

const createUser = async (newUser) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    phoneNumber: newUser.phoneNumber,
    city: newUser.city,
    state: newUser.state,
    zipCode:newUser.zipCode,
    status:newUser.status,
    userType:newUser.userType,
    userDetails:newUser.userDetails,

  });
  const createUser = await user.save();
  return {
    message: "SUCCESSFULLY Created",
    data: createUser,
  };
};

const updateUser = async (userID, newdata) => {
  const updatedUser = await User.updateOne({_id:userID}, newdata);
  return {
    message: "SUCCESSFULLY Updated",
    data: newdata,
  };
};

const deleteUser = async (userID) => {
  const deletedUser = await User.deleteOne({_id:userID});
  return {
    message: "SUCCESSFULLY Deleted",
  };
};



// const updateMany = async (newdata) => {
//   const updatedUser = await User.updateMany({department:"cs"}, newdata);
//   return {
//     message: "SUCCESSFULLY Updated",
//     data: newdata,
//   };
// };

// const deleteMany = async () => {
//   const deletedUser = await User.deleteMany({rollnumber:209});
//   return {
//     message: "SUCCESSFULLY Deleted",
//   };
// };
// const getOnebyID = async (userId) => {
//     const user = await User.findById(userId);
//     try {
//       return user;
//     } catch (err) {
//      return err;
//     }
    // return {
    //   message: "SUCCESS",
    //   data: user,
    // };
//   };
  
  // const getAUserById = async (userId) => {
  //   const user = await User.findOne({ _id: userId });
  //   return {
  //     message: "SUCCESS",
  //     data: user,
  //   };
  // };

  // const getAUserById = async (userId) => {
//   const user = await User.findOne({ _id: userId });
//   return {
//     message: "SUCCESS",
//     data: user,
//   };
// };


module.exports = {
  createUser,
  getallUsers,
  updateUser,
  deleteUser,
  getActive,
  getAdmin,
  getCustomer,
  //   getOnebyID,
  // getAUserById,
};