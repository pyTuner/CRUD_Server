const express = require('express');
const router = express.Router({ mergeParams: true });


// routes
const employeeRegistory = require('./employeeRegistory');
router.use('/employeeRegistory', employeeRegistory.router);



module.exports = {
    router
}