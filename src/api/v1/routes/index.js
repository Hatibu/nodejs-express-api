const express = require('express');
const employeeRoutes = require('./employee.route');
const studentRoutes = require('./student.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/v1/employees/',
    route: employeeRoutes,
  },
  {
    path: '/v1/students/',
    route: studentRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
