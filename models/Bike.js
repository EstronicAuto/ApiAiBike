const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({

    numberSerie :{
        type: String,
        require: false,
        default: 0
    },
    BikeApp :{
        type : Boolean,
        require: true,
        default: false
    },
    batterylevel:{
        type :  Number,
        require: true,
        default: 0
    },
    velocity:{
        type :  Number,
        require: true,
        default: 0
    },
    velocitymax:{
        type :  Number,
        require: true,
        default: 0
    },
    distance:{
        type :  Number,
        require: true,
        default: 0
    },
    avar:{
        type :  Number,
        require: true,
        default: 0
    },
    BikeOn:{
        type : Boolean,
        require: true,
        default: false  
    }
    },
    {
        timestamps: true
    })

    const Bike = mongoose.model('Bike', BikeSchema)
    module.exports = Bike






