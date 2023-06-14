const router = require("express").Router()

//Service router

const BikeRouter = require("./service")


router.use("/", BikeRouter)


module.exports = router