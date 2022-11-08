const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
   {
        "name": String,
        "age": Number,
        "isMarried" : Boolean,
    } );

mongoose.exports = mongoose.model('Users', userSchema);


