
const Supply = require('../models/Supply');
const Search = require('../models/Search');
const Users = require('../models/Users');


exports.createSupply =  (req, res, next) => {
    const { equipmentId, venueId, userId, qty } = req.body;
    Supply.addOrderSummary(equipmentId, venueId, userId, qty, res);
};

exports.insertSearch = (req, res, next) => {
    const venueName = req.body.venueName;
    Search.searchInsert(venueName, res);
  };

  exports.loginUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Users.userGet(username, password, res);
  };
  
  