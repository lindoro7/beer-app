const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();

router.post("/", userController.registration);
router.post("/", userController.login);

module.exports = router;
