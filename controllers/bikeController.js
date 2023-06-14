const {Bike: BikeModel} = require("../models/Bike")

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
            const bike = await BikeModel.findById({_id : id})
            res.json(bike);
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req,res) =>{
        const id = req.params.id;
        const bike ={
            name: req.body.name,
            numberSerie: req.body.numberSerie,
            BikeApp: req.body.BikeApp,
            Status: req.body.Status
        };
        
        try {
            const updateBike = await BikeModel.updateOne({_id: id},{$set : bike})
            if(!updateBike){
                res.status(404).json({msg: "Serviço não encontrado"})
                return
            }
    
            res.status(200).json({bike,msg:"Serviço atualizado com sucesso"}) 
        } catch (error) {
            res.status(500).json({erro: error})
        }
        


    }
}
module.exports = bikeController