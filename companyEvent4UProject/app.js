const express = require('express');
const sequelize = require('./util/database');
const app = express();
app.use(express.json());

const supplyRoute = require('./routes/supplyRoute');


app.use(supplyRoute);



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.listen(3000);

