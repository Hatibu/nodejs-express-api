const EmployeeModel = require('../models/employee.model');
//function to get all employees
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    if (err) res.send(err);
    res.send(employees);
  });
};

//function to get employee by id
exports.getEmployeeById = (req, res) => {
  // console.log('get employee by id');
  EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.send(employee);
  });
};

//function to add new employee
exports.createNewEmployee = (req, res) => {
  const employeeData = new EmployeeModel(req.body);
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });
  } else {
    EmployeeModel.createNewEmployee(employeeData, (err, employee) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: 'Usajili umekamilika kikamilifu',
        data: employee,
      });
    });
  }
};

//function to update employee
exports.updateEmployee = (req, res) => {
  const employeeData = new EmployeeModel(req.body);
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });
  } else {
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: 'Taarifa zimesasishwa kikamilifu',
          data: employee,
        });
      }
    );
  }
};

// function to delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({
      status: true,
      message: 'Taarifa zimefutwa kikamilifu',
      data: employee,
    });
  });
};
