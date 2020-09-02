const Sequelize = require('sequelize');

const sequelize = new Sequelize('group25_projectX', 'myuser', 'mypass', {
  dialect: 'mysql',
  host: '54.205.229.97',
  port:3306,
  define: {
    timestamps: false
}
});

module.exports = sequelize;