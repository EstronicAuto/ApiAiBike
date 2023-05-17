const mongoose = require('mongoose')

const Bike = mongoose.model('Bike',{
    numberSerie : String,
    BikeApp : Boolean,
    batterylevel : Number,
    velocity : Number,
    BikeOn : Boolean
})

module.exports = Bike;