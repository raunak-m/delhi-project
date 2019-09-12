const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://raunak:8802945451@delhi-places-5q1f6.mongodb.net/test' || 'mongodb://127.0.0.1:27017/delhi-places', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

