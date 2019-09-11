const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/delhi-places', {
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