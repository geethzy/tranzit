const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({
    busNo: {
        type: String
    },
    startCity: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    nic: {
        type: String
    },
    city: {
        type: String
    },
    phoneNo: {
        type: String
    },
    
}, {collection: "buses"})

const bus = mongoose.model('bus', BusSchema)

module.exports = bus;