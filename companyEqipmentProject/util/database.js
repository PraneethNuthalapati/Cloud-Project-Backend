const Sequelize = require('sequelize');

const sequelize = new Sequelize('group25_project', 'jrana', 'jrana', {
  dialect: 'mysql',
  host: '54.86.125.185',
  port:3306,
  define: {
    timestamps: false
}
});

module.exports = sequelize;