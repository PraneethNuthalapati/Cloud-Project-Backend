const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Venue = sequelize.define('venues', {
    venueId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    equipmentId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    venueName: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    orderStatus: {
        type: Sequelize.STRING
    }
  });

  
  Venue.updateVenure = async (venueId,equipmentId, res) =>{
    const transX= await sequelize.transaction({autocommit: false});
    try {
            await Venue.update(
                {
                    orderStatus: "Completed"
                }, 
                { where: { venueId: parseInt(venueId), equipmentId: parseInt(equipmentId) } ,transaction : transX})
                .then(result=>{
                    transX.commit(),
                    res.status(200).send({xUpdate: "success"});
                }).catch (error=> {
                    res.status(200).send({xUpdate: "failed"});
                    transX.rollback();
                    
                })
        } catch (error) {
            // send response as 
            console.log(error);
        }
  };

  Venue

  //get all records form company x database
  Venue.getAllVenues =  (cb) =>{
    sequelize.query("Select * from venues", { type: QueryTypes.SELECT }).then(
      records => {
          return cb(records);
      }).catch(error => console.log(error));
  };
  //get records with orderstatus In Progress form company x database
  Venue.getAllOpenVenues =  (cb) =>{
    sequelize.query("Select * from venues where orderStatus='In Progress'", { type: QueryTypes.SELECT }).then(
      records => {
          return cb(records);
      }).catch(error => console.log(error));
  };

  Venue.getOneVenues =  (venueId, equipmentId, cb) =>{
    // sequelize.query("Select * from venues where orderStatus='In Progress'", { type: QueryTypes.SELECT }).then(
    //   records => {
    //       return cb(records);
    //   }).catch(error => console.log(error));
    sequelize.findOne({
        where: {
            venueId: venueId,
            equipmentId: equipmentId
        }
    }).then(records => {
        return cb(records);
    }).catch(error => console.log(error));
  };


  module.exports = Venue;