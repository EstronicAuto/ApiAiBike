const router = require("express").Router()


const bikeController = require("../controllers/bikeController")

//Funções
router.route("/bike").post((req,res) => bikeController.create(req,res))

router.route("/bike").get((req,res) => bikeController.getAll(req,res))

router.route("/bike/:id").get((req,res) => bikeController.get(req,res))

router.route("/bike/:id").put((req,res) => bikeController.update(res,req))

module.exports = router;
