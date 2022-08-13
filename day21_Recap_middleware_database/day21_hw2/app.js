const express = require('express');
const app = express();
var router = express.Router();



const userRouter = require('./models/user');
const studentsRouter = require('./models/students');

app.use(async function (req, res, next) {
  req.userId = 1;
  next();
}) 

app.use('/', userRouter) 
app.use('/', studentsRouter) 

app.use(async function (req, res, next) {
      const myDate = new Date();
        const additionJSON = {
        data: req.myJSON,
        additionalData: {
          userId: req.userId,
          dateTime:  myDate.getFullYear() + '-' + 
          ("0" + myDate.getMonth()).slice(-2)  + '-' + 
          ("0" + myDate.getDate()).slice(-2) + ' ' + 
          ("0" + myDate.getHours()).slice(-2) + ':' + 
          ("0" + myDate.getMinutes()).slice(-2) + ':' + 
          ("0" + myDate.getSeconds()).slice(-2) ,
        } ,
      }
  res.json(additionJSON);
});

const port = 3000;
app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
})

module.exports = app;
