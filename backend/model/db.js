var Sequelize = require('sequelize');
var sequelize = new Sequelize('localdb', 'azure', '6#vWHD_$', {
  host: "localhost",
  port: "53231",
  dialect: "mysql",

  operatorsAliases: {
    $and: Sequelize.and,
    $or: Sequelize.or,
    $eq: Sequelize.eq,
    $gt: Sequelize.gt,
    $lt: Sequelize.lt,
    $lte: Sequelize.lte,
    $like: Sequelize.like
  }
});


var Orders = sequelize.define('orders', {
  name: Sequelize.STRING,
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = {
  Orders
};