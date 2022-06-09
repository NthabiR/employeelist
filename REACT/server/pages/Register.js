const  mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        requird: true,
    },
    staffNo: {
        type: String,
        requird: true,
    },
    occupation: {
        type: String,
        requird: true,
    },
    email: {
        type: String,
        requird: true,
    },
    rate: {
        type: Number,
        requird: true,
    },
    
});

const Register = mongoose.model("Register", employeeSchema)
module.exports = Register;