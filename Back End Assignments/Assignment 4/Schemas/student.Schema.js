const mongoose = require('mongoose');


const studentSchema = mongoose.Schema(
   {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String
        },
        rollnumber: {
            type: Number
        },
        department: {
            type: String
        },
    } );

module.exports = mongoose.model('student', studentSchema);


