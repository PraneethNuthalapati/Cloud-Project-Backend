const express = require('express');

const equipmentController = require('../controllers/equipmentController');

const router = express.Router();

router.post('/checkEquipment', equipmentController.createSupply);
router.post('/insertEquipment', equipmentController.insertEquipment);
router.get('/equipments', equipmentController.getEquipments);
router.get('/equipments/:Equipment_ID', equipmentController.getEquipment);
router.post('/updateEquipment', equipmentController.updateEquipment);

module.exports = router;
