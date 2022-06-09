const Router = require('express')
const clientController = require('../controllers/clientController')
const router = new Router()

router.get('/', clientController.getAll)  
router.get('/:id', clientController.getOne)
router.post('/', clientController.create)
router.delete('/:id', clientController.remove)

module.exports = router