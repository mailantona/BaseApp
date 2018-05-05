var express = require('express');
var router = express.Router();

var grid = require("../controllers/grid");
router.get('/data', grid.getData);
router.post('/data', grid.addData);
router.put('/data/:userId', grid.updateData);
router.delete('/data/:userId', grid.removeData);


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
