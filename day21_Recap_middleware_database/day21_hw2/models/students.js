const express = require('express');
var router = express.Router();


const pool = require('../config/database')

router.get('/students/:id', async (req, res, next) => {
    console.log('get students')
    const [rows] = await pool.query('SELECT * from students WHERE id = ?',[req.params.id]);
    req.myJSON = rows;
    next();
});
   

module.exports = router;