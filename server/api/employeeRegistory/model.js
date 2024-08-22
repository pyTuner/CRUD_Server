const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
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
    address: {
        type: String,
        required: true,
    },
    date_of_joining: {
        type: Date,
        default: Date.now(),
    },
    employment_status: {
        type: Boolean,
        default: true,
        required: true,
    },
    employee_type: {
        type: String,
        // required: true,
        enum: ['Full-Time', 'Part-Time', 'Intern', 'In-Active'],
        default: 'Full-Time',
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

module.exports = mongoose.model('employees', EmployeeSchema, 'employee_details')