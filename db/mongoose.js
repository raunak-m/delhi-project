const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb%2Bsrv%3A%2F%2Fraunak%3A8802945451%40delhi-places-5q1f6.mongodb.net%2Ftest%3FretryWrites%3Dtrue%26w%3Dmajority', {
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

module.exports = {
    mongoose
}