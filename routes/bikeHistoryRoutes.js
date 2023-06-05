const router = require('express').Router()
//const { json } = require('express')
const BikeHistory = require ('../models/BikeHistory')




//Read collection full
router.get('/', async (req,res) =>{
    try{
        const bike = await BikeHistory.find()
        res.status(200).json(bike)
    }catch(error){
        res.status(500).json({erro:error})
    }
})

// Criar 
router.post('/', async (req,res) =>{

    const {numberSerie,velocityMax, velocityAverage,distance,time} = req.body
    const bikehistory = {
        numberSerie,
        velocityMax,
        velocityAverage,
        distance
    }   

    if (!numberSerie){
        res.status(422).json({error: 'Biek sem numero de serie'})
    }else{
        try {
            await BikeHistory.create(bikehistory)

            res.status(201).json({message : " Historico feito com sucesso"})
        }catch(error){
            res.status(500).json({erro: error})
        }
    }
})



module.exports = router