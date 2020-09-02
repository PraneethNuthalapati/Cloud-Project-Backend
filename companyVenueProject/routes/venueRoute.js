const express = require('express');

const venueController = require('../controllers/venueController');

const router = express.Router();

router.post('/venue', venueController.updateOrderStatus);
router.post('/createVenue', venueController.insertVenue);
router.get('/getVenue/:venueId', venueController.getVenue);
router.get('/getAllVenues', venueController.getAllVenue);
router.post('/updateVenue', venueController.updateVenue);

module.exports = router;
