const { default: mongoose } = require("mongoose");


const { Schema } =  mongoose;


const statusSchema = new mongoose.Schema(
    {
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
        },
        idbike: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bike',
            require: true
        },
        assignedTo: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User',
           require: true 
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }
)

const Status = mongoose.model("Status",statusSchema)
module.exports = {Status, statusSchema}