const Router = require('express')
const drinkController = require('../controllers/drinkController')
const router = new Router()

router.get('/', drinkController.getAll)  
router.get('/:id', drinkController.getOne)
router.post('/', drinkController.create)
router.delete('/:id', drinkController.remove)

module.exports = router