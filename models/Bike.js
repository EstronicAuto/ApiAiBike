const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({

    numberSerir :{
        type: String,
        require: true,
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







/*
const Bike = mongoose.model('Bike',{
    numberSerie : String,
    BikeApp : Boolean,
    batterylevel : Number,
    velocity : Number,
    distance : Number,
    BikeOn : Boolean,
    Date : Date
})

module.exports = Bike;

*/