const Equipment = require('../models/Equipment');

exports.createSupply =  (req, res, next) => {
    const yTransaction = req.body.yTransaction;
    const equipmentId = req.body.equipmentId;
    const quantity = req.body.quantity;
    Equipment.updateEquipment(yTransaction, equipmentId, quantity, res);
};

exports.insertEquipment =  async (req, res, next) => {
   
    const Equipment_Name = req.body.Equipment_Name;
    const Qoh = req.body.Qoh;
    const equipment = await Equipment.create({ Equipment_Name: Equipment_Name, Qoh: parseInt(Qoh) });
    res.status(200).send("Inserted");
};

exports.getEquipment=  async (req, res, next) => {
    const Equipment_ID = req.params.Equipment_ID;
    const equipment = await Equipment.findOne({ where: { Equipment_ID: Equipment_ID } });
    res.status(200).send(equipment);
};


exports.getEquipments =  async (req, res, next) => {
    const equipments = await Equipment.findAll();
    res.status(200).send(equipments);
};

exports.updateEquipment =  async (req, res, next) => {
    const Equipment_Name = req.body.Equipment_Name;
    const Qoh = req.body.Qoh;
    const Equipment_ID = req.body.Equipment_ID;
    const equipment = await Equipment.update({ Equipment_Name:  Equipment_Name, Qoh: Qoh}, {where :{Equipment_ID: Equipment_ID}});
    res.status(200).send(equipment);
};
  
  