const router = require('express').Router()
const Person = require('../models/Person')


//Create Person
router.post('/', async (req, res) => {
    const { name, salary, approved } = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatorio!'})
    }

    const person = {
      name,
      salary,
      approved,
    }
  
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  //Read Person
  router.get('/', async (req,res) =>{

    try{
      const person = await Person.find().sort({ _id: -1}).limit(1);
        res.status(200).json(person)
    }catch(error){
        res.status(500).json({erro: error})
    }
  })

  router.get('/:id', async (req,res) =>{
    const id = req.params.id;


    try{
        const person = await Person.find().sort({ _id: id}).limit(1);
        res.status(200).json(person)
    }catch(error){
        res.status(500).json({erro:error})
    }
  })


  // Update -  PUT , PATCH
  router.patch('/:id', async (req,res) =>{
    const id = req.params.id

    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved,
      }

    try{
        const updatePerson = await Person.updateOne({_id : id}, {$set: person})

        res.status(200).json(person)
    }catch(error){
        res.status(500).json({erro: error})
    }

  })
 
  module.exports = router