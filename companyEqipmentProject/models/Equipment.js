const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const date = require("date-and-time");
const jc = require('json-cycle');

const Equipment = sequelize.define('equipments', {
    Equipment_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Equipment_Name: {
        type: Sequelize.STRING
    },
    Qoh: {
        type: Sequelize.INTEGER
    }
  });

  
  Equipment.updateEquipment = async (transId, equipmentId, quantity, res) =>{
    const transY= await sequelize.transaction({autocommit: false});
    try {
            const equipment = await Equipment.findOne({ where: { Equipment_ID: equipmentId } });
            if (equipment === null || !equipment) {
                res.status(200).send({yUpdate: "failed", reson:`Equipment Id: ${equipmentId} does not exist in Equipment Company`});
            }
            if (equipment.Qoh >= quantity) {
                const uptedQoh = parseInt(equipment.Qoh) - parseInt(quantity) 
                await Equipment.update(
                    {
                        Qoh: parseInt(uptedQoh)
                    }, 
                    { where: { Equipment_ID: parseInt(equipmentId) } ,transaction : transY})
                    .then(result=>{
                        transY.commit(),
                        res.status(200).send({yUpdate: "success"});
                    }).catch (error=> {
                        res.status(200).send({yUpdate: "failed", reson:"transaction rolledback"});
                        transY.rollback();
                        
                    })
            } else {
                res.status(200).send({yUpdate: "failed", reson:"Equipment quantity is less"});
            }
         
        } catch (error) {
            // send response as 
            console.log(error);
        }
  };



  module.exports = Equipment;