const Sequelize = require('sequelize');
const {sequelizeZ, sequelizeX, sequelizeY} = require('../util/database');
const date = require("date-and-time");
const axios = require("axios").default;
const circularJson = require('circular-json');
const jc = require('json-cycle');

const orderSummary = sequelizeZ.define('supply', {
    equipmentId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    venueId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    userId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    qty: Sequelize.INTEGER,
    date: Sequelize.DATEONLY,
    time: Sequelize.TIME,
    result: Sequelize.STRING
  });

  
  orderSummary.addOrderSummary = async (equipmentId, venueId, userId, qty, res) =>{
    const trans= await sequelizeZ.transaction({autocommit: false});
    try {
            const now = new Date();
            const dd = date.format(now, "YYYY/MM/DD");
            const tt = date.format(now, "hh:mm A ");
            const user=   await orderSummary.create({
            equipmentId: equipmentId,
            venueId: venueId,
            userId: userId,
            qty: qty,
            date: dd,
            time: tt,
            result: "Success"
        }, {transaction : trans}).then(result=>{
            console.log("Entered");
            updateCompanyY(res, qty , trans, venueId, equipmentId)
        });
        
    } catch (error) {
        await trans.rollback();
    }
  };

  updateCompanyY = (response, qty, trans, venueId, equipmentId) =>{

      try{
        axios.post(`http://ec2-54-221-59-58.compute-1.amazonaws.com:5000/checkEquipment`, {
            yTransaction:  "",
            equipmentId: equipmentId,
            quantity: qty
        }, {headers: {
            'Content-Type': 'application/json'
        }})
        .then(res=>{
            if (res.data.yUpdate === "success"){
                updateCompanyX(response, venueId, equipmentId, trans)
            }
            else if(res.data.yUpdate === "failed"){
                trans.rollback();
                response.send({failurReason:res.data.reson});
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    catch (error){
        console.log(error)
    }
}

updateCompanyX = (response, venueId , equipmentId, trans) =>{
    try{
      axios.post(`http://54.146.204.95:7000/venue`, {
            venueId: venueId,
            equipmentId: equipmentId,
      }, {headers: {
          'Content-Type': 'application/json'
      }})
      .then(res=>{
          if (res.data.xUpdate === "success"){
            trans.commit();
            response.send("X update Success");
          }
          else{
                response.send("X update failed");
                trans.rollback();
              
          }
      })
      .catch(err=>{
          console.log(err.message);
      })
  }
  catch (error){
      console.log(error)
  }
}


  module.exports = orderSummary;