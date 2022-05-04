const mongoose = require('mongoose');
//const mongodb = "mongodb://localhost:27017/employeeportal"
mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(!err){console.log('Mongodb connection succeeded.'); }
    else{console.log('Error in Mongodb Connenction: '  +JSON.stringify(err, undefined, 2)); }
});

require('./user.model');