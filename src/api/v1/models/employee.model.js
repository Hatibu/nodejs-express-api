const dbConn = require('../config/dbConfig');

const Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.age = employee.age;
  this.gender = employee.gender;
  this.title = employee.title;
};

// get all employees
Employee.getAllEmployees = (result) => {
  dbConn.query('SELECT * FROM employees', (err, res) => {
    if (err) {
      console.log('Error while fetching data', err);
      result(null, err);
    } else {
      console.log('Data fetched successfully', res);
      result(null, res);
    }
  });
};

// get employee data by id from DB
Employee.getEmployeeById = (id, result) => {
  dbConn.query(`SELECT * FROM employees WHERE emp_id = ${id}`, (err, res) => {
    if (err) {
      console.log('kuna hitirafu imejitokeza ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new employee
Employee.createNewEmployee = (employeeData, result) => {
  const { first_name, last_name, age, gender, title } = employeeData;

  dbConn.query(
    `INSERT INTO employees (first_name,last_name,age,gender,title) VALUES ('${first_name}','${last_name}',${age},'${gender}','${title}')`,

    (err, res) => {
      if (err) {
        console.log(
          'Kuna hitirafu imejitokeza wakati wa kupeleka taarifa',
          err,
        );
        result(null, err);
      } else {
        console.log('Taarifa zimefanikiwa kusajiliwa kikamilifu');
        result(null, res);
      }
    },
  );
};

// update employee
Employee.updateEmployee = (id, employeeData, result) => {
  const { first_name, last_name, age, gender, title } = employeeData;
  dbConn.query(
    `UPDATE employees SET first_name = '${first_name}',last_name='${last_name}',age=${age},gender='${gender}',title='${title}' WHERE emp_id=${id}`,
    (err, res) => {
      if (err) {
        console.log('Hitirafu imejitokeza wakati wa kusasisha taarifa', err);
        result(null, res);
      } else {
        console.log('Taarifa zimesasishwa kikamilifu');
      }
    },
  );
};

// delete employee
Employee.deleteEmployee = (id, result) => {
  dbConn.query(`DELETE FROM employees WHERE emp_id=${id}`, (err, res) => {
    if (err) {
      console.log('Hitirafu imejitokeza wakati wa kufuta taarifa');
      result(null, err);
    } else {
      console.log('Taarifa zimefutwa kikamilifu');
      result(null, res);
    }
  });
};

module.exports = Employee;
