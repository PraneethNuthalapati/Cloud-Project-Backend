const Sequelize = require('sequelize');

const sequelizeZ = new Sequelize('group25_project', 'praneeth', 'praneeth', {
  dialect: 'mysql',
  host: '54.146.204.95',
  port:3306,
  define: {
    timestamps: false
}
});

const sequelizeX = new Sequelize('group25_project', 'praneeth', 'praneeth', {
  dialect: 'mysql',
  host: '54.146.204.95',
  port:3306,
  define: {
    timestamps: false
}
});

const sequelizeY = new Sequelize('group25_project', 'jrana', 'jrana', {
  dialect: 'mysql',
  host: '54.86.125.185',
  port:3306,
  define: {
    timestamps: false
}
});

module.exports = {sequelizeZ, sequelizeX, sequelizeY}