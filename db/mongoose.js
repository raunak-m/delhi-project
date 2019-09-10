const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://dbuser:dbpass@host1:port1,host2:port2/delhi-place', {
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