const StudentModel = require('../models/student.model');

//function to get all students
exports.getStudentsList = (req, res) => {
  StudentModel.getAllStudents((err, students) => {
    if (err) {
      res.send(err);
    } else {
      res.send(students);
    }
  });
};
