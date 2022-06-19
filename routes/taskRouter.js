const Router = require('express')
const taskController = require('../controllers/taskController')
const router = new Router()

router.get('/', taskController.getAll)  
router.get('/:id', taskController.getOne)
router.post('/', taskController.create)
router.delete('/:id', taskController.remove)

module.exports = router