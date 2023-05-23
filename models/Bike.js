const mongoose = require('mongoose')

const Bike = mongoose.model('Bike',{
    numberSerie : String,
    BikeApp : Boolean,
    batterylevel : Number,
    velocity : Number,
    distance : Number,
    BikeOn : Boolean
})

module.exports = Bike;