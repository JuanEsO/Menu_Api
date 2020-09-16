const Sequelize = require('sequelze');

const sequelize = new Sequelize('qr_comer', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});