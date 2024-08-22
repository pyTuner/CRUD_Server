const employee = require('./model');

// create a new entry of the employee
const createEmployeeEntry = async (req, res) => {
    const { name, mobile, email, address, department, salary } = req.body;

    try {
        const newEmployee = new employee({ name, mobile, email, address, department, salary });
        const savedEmployeeDetail = await newEmployee.save();
        res.json(savedEmployeeDetail);
    } catch (error) {
        if (error.code === 11000) { // Mongoose unique index error code
            res.status(400).json({ message: 'Email or mobile number already exists!' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

// Read all employees details
const getEmployeeDetails = async (req, res) => {

    try {
        const showEmployees = await employee.aggregate([{
            $match: { employment_status: true }
        }]);
        res.json(showEmployees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update employee details
const updateEmployeeDetails = async (req, res) => {
    try {
        const updateEmployeeDetails = await employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updateEmployeeDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Remove/delete employee details (soft elete)
const removeEmployeeDetails = async (req, res) => {
    try {
        const removeEmployeeDetails = await employee.findByIdAndUpdate(req.params.id, { employment_status: false }, { new: true });
        res.json(removeEmployeeDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete employee details (hard delete)
const hardDeleteEmployeeDetails = async (req, res) => {
    try {
        const deleteEmployeeDetails = await employee.findByIdAndDelete(req.params.id);
        if (!deleteEmployeeDetails) {
            res.json({ message: 'Employee not found.' });
        } else {
            res.json(deleteEmployeeDetails);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// exports all methods
module.exports = {
    createEmployeeEntry,
    getEmployeeDetails,
    updateEmployeeDetails,
    removeEmployeeDetails,
    hardDeleteEmployeeDetails,
}