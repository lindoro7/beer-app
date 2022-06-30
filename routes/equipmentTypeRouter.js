const Router = require("express");
const equipmentTypeController = require("../controllers/equipmentTypeController");
const router = new Router();

router.get("/", equipmentTypeController.getAll);
router.get("/:id", equipmentTypeController.getOne);
router.post("/", equipmentTypeController.create);
router.delete("/:id", equipmentTypeController.remove);

module.exports = router;
