const {Status : StatusModel} = require ("../models/Status");
const { update } = require("./bikeController");

const statusController ={

    create: async(req,res) =>{
        try {
            const status ={
                batterylevel: req.body.batterylevel,
                velocity : req.body.velocity,
                velocitymax : req.body.velocitymax,
                distance : req.body.distance,
                avar : req.body.avar,
                BikeOn : req.body.BikeOn
            }


            const response = await StatusModel.create(status);
            res.status(201).json({response, msg: "Serviço criado com sucesso"});
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req,res) =>{
        try {
            const status = await StatusModel.find()
            res.json(status)
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req,res) =>{

        try {
            const id = req.params.id;
            const status = await StatusModel.findById({_id : id});
            res.json(status)
        } catch (error) {
            
        }
    },
    update: async(req,res) =>{
        const id = req.params.id
        const status ={
            batterylevel: req.body.batterylevel,
            velocity : req.body.velocity,
            velocitymax : req.body.velocitymax,
            distance : req.body.distance,
            avar : req.body.avar,
            BikeOn : req.body.BikeOn
        }

        const updateStatus = await StatusModel.findByIdAndUpdate(id,status);

        if(!updateStatus){
            res.status(404).json({msg: "Error"});
            return
        }
        res.status(200).json({msg: "OK"});
    }
};


module.exports = statusController;