// handles data and business logics
const dbConnection = require('../../database/database');

// create student model
var Student = function (student) {
  this.student_id = student.student_id;
  this.first_name = student.first_name;
  this.last_name = student.last_name;
  this.age = student.age;
  this.gender = student.gender;
  this.residence = student.residence;
  this.occupation = student.occupation;
};

//get all students

Student.getAllStudents = (result) => {
  console.log('This is student model');
  dbConnection.query('SELECT * FROM students', (err, res) => {
    if (err) {
      console.log('Hitirafu imejitokeza wakati wa kuchota taarifa', err);
      result(null, err);
    } else {
      console.log('Taarifa zimechotwa kikamilifu', res);
      result(null, res);
    }
  });
};

module.exports = Student;
