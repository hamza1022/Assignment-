const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
        _id: mongoose.Schema.Types.ObjectId,
        firstName: {type:String},
        lastName: {type:String},
        email : {type:String},
        phoneNumber: {type:String},
        city: {type:String},
        state: {type:String},
        status: {type:String},
        userType: {type:String},
        userDetails: [
            { _id: false,
            "cardNumber": {type:Number}, 
            "cardStatus":{type:String},
            }
        ],

    });

module.exports = mongoose.model('user', userSchema);


