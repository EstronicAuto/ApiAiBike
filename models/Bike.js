const mongoose = require('mongoose')

const { Schema } =  mongoose;

const {statusSchema} = require("./Status")

const BikeSchema = new mongoose.Schema({
        name:{
            type: String,
            require: true
            },
        numberSerie :{
            type: String,
            require: true,
            default: 0
        },
        bikeapp :{
            type : Boolean,
            require: true,
            default: false
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },  
        status :[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Status'
        }],
        createdAt:{
            type: Date,
            default: Date.now
        }
    },
        {timestamps: true}
    )

    const Bike = mongoose.model('Bike', BikeSchema)
    module.exports ={Bike,BikeSchema}






