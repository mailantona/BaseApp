var express = require('express');
var router = express.Router();

/*
var mysql = require('mysql');
const config = require('../config/mysqlConf.js');
*/
var grid = require("../controllers/grid");
router.get('/data', grid.getData);
router.post('/data', grid.addData);
router.put('/data/:userId', grid.updateData);
router.delete('/data/:userId', grid.removeData);


/*
router.get('/', function (req, res, next) {

  var queryString = 'SELECT * FROM customers LIMIT ' + req.query.skip + ',' + req.query.take;


  var connection = mysql.createConnection(config);
  connection.query(queryString, function (error, results, fields) {
    if (error) {
      res.status(400).json(error);
    }
    res.status(200).json({
      "items": results,
      "skip": req.query.skip,
      "take": req.query.take,
      "orderby": req.query.orderby,
      "queryString": queryString
    });
  });
  connection.end();


});
*/
module.exports = router;
