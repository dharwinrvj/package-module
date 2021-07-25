//imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
//routes
const adminfaculty = require('./routes/adminfaculty');
const adminstudent = require('./routes/adminstudent');
//middlewares
//view engine
app.set("view engine", 'ejs');
//api middleware
app.use(morgan('dev'));
//static files
app.use(express.static(path.join(__dirname, 'public')));
//env variables
require('dotenv/config');
//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//router-config
app.use('/vcetadmin/faculty', adminfaculty);
app.use('/vcetadmin/student', adminstudent);
//router
//home
app.get("/", (req, res) => {
  res.render("index");
});
//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server at " + port);
});
//database connection
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect('mongodb://localhost:127.0.0.1/vcetsms', (err) => {
  if (err) throw err;
  console.log("DB connected");
});
