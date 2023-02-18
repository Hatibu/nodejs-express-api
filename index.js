require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = process.env.SERVER_PORT || 5000;

const app = express();
app.use(helmet());
// parse data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse data content type application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('api is working');
});

//import employee route
const employeeRoutes = require('./src/routes/employee.route.js');
//import student route
const studentRoutes = require('./src/routes/student.route.js');

// create employee route
app.use('/api/v1/employees/', employeeRoutes);

//create student route
app.use('/api/v1/students/', studentRoutes);

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
