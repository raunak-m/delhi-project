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
        type: Array,
        required: true
    },
    nearestMetro: {
        type: String,
        required: false,
    },
    mapLink: {
        type: String,
        required: false
    },
    location: {
        type: Array,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: Array,
        required: false
    },
    openAllWeek: {
        type: Boolean,
        required: false
    },
    timings: {
        type: Array,
        required: false
    },
    attractions: {
        type: String,
        required: false
    }
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places