const express = require('express');
const sequelize = require('./util/database');
const app = express();
app.use(express.json());
const equipmentRoute = require('./routes/equipment');

app.use(equipmentRoute);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.listen(5000);

