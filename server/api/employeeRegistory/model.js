const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: false,
    },
    hire_date: {
        type: String,
        required: true,
        default: Date.now(),
    },
    employee_status: {
        type: Boolean,
        default: true,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },

    // employee_id: {
    //     type: String,
    //     unique: true,
    //     default: '',
    // }
})

module.exports = mongoose.model('employees', EmployeeSchema, 'employee_directory')