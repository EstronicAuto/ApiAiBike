const router = require('express').Router()
const { json } = require('express')
const Bike = require ('../models/Bike')


//Read collection full
router.get('/', async (req,res) =>{
    try{
        const bike = await Bike.find()
        res.status(200).json(bike)
    }catch(error){
        res.status(500).json({erro:error})
    }
})

router.get('/:teste', async (req,res) =>{
    const id = req.params.teste;
     console.log(id)
    try{
        const bike = await Bike.findOne({_id: id})
        console.log(json(bike))
        res.status(200).json(bike)
    }catch(error){
        res.status(500).json({erro:error})
    }
  })

//Create Bike
router.post('/', async (req,res) =>{
    const {numberSerie, BikeApp, batterylevel, velocity,velocitymax,distance,BikeOn,Date} = req.body

    const bike = {
        numberSerie,
        BikeApp,
        batterylevel,
        velocity,
        velocitymax,
        distance,
        average,
        BikeOn,
        Date
    }

    if(!numberSerie){
        res.status(422).json({error: 'Bike sem Numero de Serie'})
    }else{
        try {
            await Bike.create(bike)
    
            res.status(201).json({message: 'Bike Criada com Sucesso'})
        }catch(error){
            res.status(500).json({erro: error})
        }
    }
})


router.post('/LastBikeCreated', async(req,res) =>{
    try{
        const bike = await Bike.find().sort({_id: -1}).limit(1);
        res.status(200).json(bike)
    }catch(error){
        res.status(500).json({erro:error})
    }
})

//update bike

router.patch('/:id', async (req,res) =>{
    const id = req.params.id

    const {numberSerie, BikeApp, batterylevel, velocity,velocitymax,distance,BikeOn,Date} = req.body

    const bike = {
        numberSerie,
        BikeApp,
        batterylevel,
        velocity,
        velocitymax,
        distance,
        BikeOn,
        Date
    }

    try{
        const updateBike = await Bike.updateOne({_id : id}, {$set : bike})

        res.status(200).json(bike)
    }catch(error){
        res.status(500).json({erro: error})
    }

})

module.exports = router