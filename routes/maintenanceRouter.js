const Router = require('express')
const maintenanceController = require('../controllers/maintenanceController')
const router = new Router()

router.get('/', maintenanceController.getAll)  
router.get('/:id', maintenanceController.getOne)
router.post('/', maintenanceController.create)
router.delete('/:id', maintenanceController.remove)

module.exports = router