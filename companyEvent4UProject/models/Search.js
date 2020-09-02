const Sequelize = require('sequelize');
const {sequelizeZ, sequelizeX, sequelizeY} = require('../util/database');
const date = require("date-and-time");

const Search = sequelizeZ.define('searchs', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    venueName: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    time: {
        type: Sequelize.STRING
    }
  });

  
  Search.searchInsert = async (venueName, res) =>{
    try {
            const now = new Date();
            const dd = date.format(now, "YYYY/MM/DD");
            const tt = date.format(now, "hh:mm A ");
            const user=   await Search.create({
            venueName: venueName,
            date: dd,
            time: tt,
        }).then(result=>{
            res.send("Inserted in search");
        });
        
    } catch (error) {
        console.log(error);
    }
  };






  module.exports = Search;