const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    about: {
        type: String,
        required: true
    },
    photos: {
        type: Array
    },
    nerestMetro: {
        type: String,
        required: false,
    }
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places