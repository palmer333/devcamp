const express = require('express');
const app = express();
var router = express.Router();


const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  database : 'codecamp'
});


router.get('/user/:id', async (req, res, next) => {
  console.log('get user')
  const [rows] = await pool.query('SELECT * from user WHERE id = ?',[req.params.id]);
  req.myJSON = rows;
  next();
 });

 
 router.get('/students/:id', async (req, res, next) => {
  console.log('get students')
  const [rows] = await pool.query('SELECT * from students WHERE id = ?',[req.params.id]);
  req.myJSON = rows;
  next();
 });


app.use(async function (req, res, next) {
  req.userId = 1;
  next();
}) 

app.use('/', router);


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