const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//Get employee
app.get("/api/employee/:id_employee", (req, res) => {

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "personal_data",
      port: 3306,

    });
    connection.connect();
  
    //Variables id
    const id_employees = req.params.id_employee
    connection.query(
      `select * from employee where id_employee = ${id_employees}`,
      (err, rows, fields) => {
  
        if (rows.length !== 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("No employee in database");
        }
      }
    );
    connection.end();
  });


//Post employee
app.post("/api/employee", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "personal_data",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const phone_number = req.body.phone_number  
  const email = req.body.email
  const address = req.body.address
  const sub_district = req.body.sub_district
  const district = req.body.district
  const province = req.body.province
  const postcode = req.body.postcode
  const ID_card_number = req.body.ID_card_number

  connection.query(
      `insert into employee (first_name, last_name, phone_number, email, address, sub_district, district, province, postcode, ID_card_number) values ('${first_name}' , '${last_name}', '${phone_number}', '${email}' ,'${address}', '${sub_district}', '${district}', '${province}' ,'${postcode}', '${ID_card_number}')`,
    (err, result, field) => {
      
        console.log(err);
        res.json(result)
    
    })
    connection.end();
})



//Post company
app.post("/api/company", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "personal_data",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const company_name = req.body.company_name
  const company_address = req.body.company_address
  const duration = req.body.duration  
  const position = req.body.position
  const id_employee = req.body.id_employee

  connection.query(
      `insert into company (company_name, company_address, duration, position, id_employee) values ('${company_name}' , '${company_address}', ${duration}, '${position}' ,${id_employee})`,
    (err, result, field) => {

      console.log(err)
      res.json(result)

    }
  );
  connection.end();
});


//Listening Port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  

