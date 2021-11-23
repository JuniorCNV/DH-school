const Sequelize = require('sequelize')
const sequelize = new Sequelize ('escola', 'root', '',{dialect: 'mysql', host: 'localhost'});


module.exports = sequelize;