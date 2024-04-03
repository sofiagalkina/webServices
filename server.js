//import express
var express = require('express');
//create instances
var app = express();
const db = require('./db/connect');

app.use('/', require('./routes'));

<<<<<<< HEAD
db.initDb((error)=>{
=======
db.initDb((error) => {
>>>>>>> 2c0651396d39ff5a12ce317d631a468db8fd48ee
    if (error) {
        console.error(error);
        return;
    }

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

});
<<<<<<< HEAD
=======

>>>>>>> 2c0651396d39ff5a12ce317d631a468db8fd48ee
