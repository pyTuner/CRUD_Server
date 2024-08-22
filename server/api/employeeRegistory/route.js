const express = require('express');
const { createEmployeeEntry, getEmployeeDetails, updateEmployeeDetails, hardDeleteEmployeeDetails, removeEmployeeDetails } = require('./controller');

const router = express.Router();

// routes
router.post('/insert', createEmployeeEntry);
router.get('/get', getEmployeeDetails);
router.put('/update/:id', updateEmployeeDetails);
router.put('/remove/:id', removeEmployeeDetails);  // soft delete (change employment_status to false)
router.delete('/hard-delete/:id', hardDeleteEmployeeDetails); // hard delete 

module.exports = router;
