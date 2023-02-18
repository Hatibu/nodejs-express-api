const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

//get all students
router.get('/', studentController.getStudentsList);
module.exports = router;
