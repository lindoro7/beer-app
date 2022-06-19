const Router = require('express')
const equipmentController = require('../controllers/equipmentController')
const router = new Router()

router.get('/', equipmentController.getAll)  
router.get('/:id', equipmentController.getOne)
router.post('/', equipmentController.create)
router.delete('/:id', equipmentController.remove)

module.exports = router