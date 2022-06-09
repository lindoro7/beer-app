const Router = require('express')
const router = new Router()

const clientRouter = require('./clientRouter')
const drinkRouter = require('./drinkRouter')
const equipmentRouter = require('./equipmentRouter')
const maintenanceRouter = require('./maintenanceRouter')
const taskRouter = require('./taskRouter')
const userRouter = require('./userRouter')

router.use('/client', clientRouter)
router.use('/drink', drinkRouter)
router.use('/equipment', equipmentRouter)
router.use('/maintenance', maintenanceRouter)
router.use('/task', taskRouter)
router.use('/user', userRouter)

module.exports = router