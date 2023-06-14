const mongoose = require('mongoose')

const { Schema } =  mongoose;

const {statusSchema} = require("./Status")

const BikeSchema = new Schema({

        name:{
            type: String,
        },
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
        Status :{
            type: [statusSchema]
        },
    },
    {timestamps: true}
    )

    const Bike = mongoose.model('Bike', BikeSchema)
    module.exports ={Bike,BikeSchema}






