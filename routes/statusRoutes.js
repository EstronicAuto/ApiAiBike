const router = require("express").Router()


const {Status: StatusModel} = require("../models/Status")

router.get('/status', async (req,res) => {
    try {
        const status = await StatusModel.find();
        return res.send({status});
    } catch (error) {
        return res.status(400).send({error : 'Error Get'});      
    }
})

//get pelo id do relacionamento
router.get('/status/:bikeid', async(req,res) =>{
    try {
        const id = req.params.bikeid
        const status = await StatusModel.find({idbike : id});
        return res.send({status})
    } catch (error) {
        return res.status(400).send({error : 'Error Get Status'});  
    }
})
//get pelo id gerado 
router.get('/status/id/:id', async(req,res) =>{
    try {
        const id = req.params.id
        const status = await StatusModel.findById(id);
        return res.send({status})
    } catch (error) {
        return res.status(400).send({error : 'Error Get Status'});  
    }
})
router.put('/status/:id', async (req,res) =>{
    try {
        const {batterylevel, velocity,velocitymax,distance,avar} = req.body;

        const status = {
            batterylevel,
            velocity,
            velocitymax,
            distance,
            avar
        }

        const updateStatus = await StatusModel.updateOne({idbike : req.params.id}, {$set : status})
        console.log(status);
        res.send(status)
    } catch (error) {
        return res.status(400).send({error : 'Error Put Bike'}); 
    }

})

router.delete('/status/:bikeId', async (req,res) => {
    try {
    const id = req.params.bikeId;
    await StatusModel.findOneAndDelete({idbike : id});
    return res.send({message : " Delete Status"});
    } catch (error) {
        return res.status(400).send({error : 'Error Delete Bike'});      
    }
}) 

module.exports = router;