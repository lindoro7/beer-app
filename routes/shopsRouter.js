const Router = require("express");
const shopsController = require("../controllers/shopsController");
const router = new Router();

router.get("/", shopsController.getAll);
router.put("/:id", shopsController.update);
router.post("/", shopsController.create);
router.delete("/:id", shopsController.remove);

module.exports = router;
