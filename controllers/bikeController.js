const {Bike: BikeModel} = require("../models/Bike")

const {Status : StatusModel} = require ("../models/Status");


const bikeController = {

    create: async(req,res) =>{
        try {
            const bike ={
                name: req.body.name,
                numberSerie: req.body.numberSerie,
                BikeApp: req.body.BikeApp,
                Status: req.body.Status
            }

            const response = await BikeModel.create(bike);
            res.status(201).json({response, msg: "Serviço criado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req,res) =>{
        try {
            const bike = await BikeModel.find()
            res.json(bike)
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            
            const id = req.params.id
            //console.log(id);
            const bike = await BikeModel.findById({_id : id})
            res.json(bike);
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req,res) =>{
        const id = req.params.id
        const bike ={
            name: req.body.name,
            numberSerie: req.body.numberSerie,
            BikeApp: req.body.BikeApp,
            Status: req.body.Status
        };
        
            const updateBike = await BikeModel.findOneAndUpdate({_id : id}, bike)
            if(!updateBike){
                res.status(404).json({msg: "Error"});
                return
            }
        console.log(bike);


        res.status(200).json({msg: "OK"});
    },updateStatus: async(req,res) =>{
        const id = req.params.id

        const status ={
            batterylevel: req.body.batterylevel,
            velocity : req.body.velocity,
            velocitymax : req.body.velocitymax,
            distance : req.body.distance,
            avar : req.body.avar,
            BikeOn : req.body.BikeOn
        }

        const updateStatus = await StatusModel.findByIdAndUpdate({_id : id}, status)
        console.log(status);
        console.log(id);
        if(!updateStatus){
            res.status(404).json({msg: "Error"});
            return
        }
        
        res.status(200).json({msg: "OK status"});

    }
}
module.exports = bikeController