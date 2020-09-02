const Sequelize = require('sequelize');
const {sequelizeZ, sequelizeX, sequelizeY} = require('../util/database');
const date = require("date-and-time");

const Users = sequelizeZ.define('Users', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
  });

  
  Users.userGet = (username, password, res) =>{
    try {
            Users.findOne({
           where:{name: username, password: password}
        }).then(result=>{
            if(result === null){
                res.status(200).send({message:"Failed"});
            }
            else{
                res.status(200).send({message:"Success"});
            }
            
        });
        
    } catch (error) {
        console.log(error);
    }
  };






  module.exports = Users;