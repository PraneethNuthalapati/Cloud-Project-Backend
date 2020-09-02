const Venue = require('../models/Venue');

exports.updateOrderStatus =  (req, res, next) => {
    // const yTransaction = req.body.yTransaction;
    const venueId = req.body.venueId;
    const equipmentId = req.body.equipmentId;
    Venue.updateVenure( venueId, equipmentId, res);
};

exports.insertVenue =  async (req, res, next) => {
    const equipmentId = req.body.equipmentId;
    const venueName = req.body.venueName;
    const quantity = req.body.quantity;
    const venue = await Venue.create({ equipmentId: equipmentId, venueName: venueName, orderStatus: "In Process", quantity: parseInt(quantity)  });
    res.status(200).send("Inserted");
};

exports.getVenue =  async (req, res, next) => {
    const venueId = req.params.venueId;
    const venue = await Venue.findOne({ where: { venueId: venueId } });
    res.status(200).send(venue);
};


exports.getAllVenue =  async (req, res, next) => {
    const venues = await Venue.findAll();
    res.status(200).send(venues);
};

exports.updateVenue =  async (req, res, next) => {
    const venueId = req.body.venueId;
    const venueName = req.body.venueName;
    const quantity = req.body.quantity;
    const venue = await Venue.update({ venueName:  venueName, quantity: quantity}, {where :{venueId: venueId}});
    res.status(200).send(venue);
};