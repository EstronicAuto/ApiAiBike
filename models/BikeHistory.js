const mongoose = require('mongoose')

const BikeHistorySchema = mongoose.Schema({

    numberSerie :{
        type: String,
        require: [true, "Por favor insira o numero e serie"]
    },
    velocityMax :{
        type: Number,
        require: true,
        default: 0
    },
    velocityAverage:{
        type: Number,
        require: true,
        default: 0
    },
    distance:{
        type: Number,
        require: true,
        default: 0
    }
    },
    {
        timestamps: true
    })


const BikeHistory = mongoose.model('Bike History', BikeHistorySchema)
module.exports = BikeHistory