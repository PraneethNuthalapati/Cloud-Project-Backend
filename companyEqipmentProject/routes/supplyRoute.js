const express = require('express');

const supplyController = require('../controllers/supplyController');

const router = express.Router();

router.post('/supply', supplyController.createSupply);

module.exports = router;
