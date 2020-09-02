const express = require('express');

const supplyController = require('../controllers/supplyController');

const router = express.Router();

router.post('/supply', supplyController.createSupply);
router.post('/search', supplyController.insertSearch);
router.post('/login', supplyController.loginUser);

module.exports = router;
