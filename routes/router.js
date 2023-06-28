const router = require("express").Router()

//Service router

const BikeRouter = require("./service")

const StatusRouter = require("./statusRoutes")


router.use("/", BikeRouter)

router.use("/", StatusRouter)


module.exports = router