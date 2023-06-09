const router = require("express").Router()


const bikeController = require("../controllers/bikeController")

const {Bike: BikeModel} = require("../models/Bike")
const {Status: StatusModel} = require("../models/Status")

//Funções
/*
router.route("/bike").post((req,res) => bikeController.create(req,res))

router.route("/bike").get((req,res) => bikeController.getAll(req,res))

router.route("/bike/:id").get((req,res) => bikeController.get(req,res))

router.route("/bike/:id").patch((req,res) => bikeController.update(req,res))

router.route("/bikestatus/:id").patch((req,res)=> bikeController.updateStatus(req,res))
*/

router.get('/bike', async (req,res) => {
    try {
        const bike = await BikeModel.find().populate(['status']);

        res.status(200).json(bike);
    } catch (error) {
        return res.status(400).send({error : 'Error Get'});      
    }
}) 

router.get('/bike/:bikeId', async (req,res) => {
    try {
        const bike = await BikeModel.findById(req.params.bikeId).populate('status');

        res.status(200).json(bike);
    } catch (error) {
        return res.status(400).send({error : 'Error Get'});      
    }
}) 

router.get('/LastbikeCreated', async (req,res) =>{
    try {
        const bike = await BikeModel.find().sort({_id : -1}).limit(1);

        res.status(200).json(bike);
    } catch (error) {
        return res.status(400).send({error : 'Error Get'});      
    }
})

router.post('/bike', async (req,res) =>{
    try {

        const {name, numberSerie,bikeapp,status} = req.body;
        const bike = await BikeModel.create({name, numberSerie,bikeapp});


        await Promise.all(status.map( async NewStatus => {
            const bikestatus = new StatusModel({...NewStatus, idbike: bike._id})

            await bikestatus.save();

            bike.status.push(bikestatus);
        }));

        await bike.save();

        res.status(200).json(bike);
    } catch (error) {
        return res.status(400).send({error : 'Error creating new Bike'});
    }
})

router.patch('/bike/:bikeId', async (req,res) => {
   try {
        const {name, numberSerie,bikeapp} = req.body;
        const bike = await BikeModel.findByIdAndUpdate(req.params.bikeId,{name, numberSerie,bikeapp});
    
        res.status(200).json(bike);
    
   } catch (error) {
        return res.status(400).send({error : 'Error creating new Bike'});
   }
})

router.delete('/bike/:bikeid', async (req,res) => {
    try {
    const id = req.params.bikeid
    await BikeModel.findByIdAndDelete(id);
    return res.send({message : "Delete Ok"});
    } catch (error) {
        return res.status(400).send({error : 'Error Delete Bike'});      
    }
}) 

module.exports = router;
