const Router = require("express");
const router = new Router();

const drinkRouter = require("./drinkRouter");
const equipmentRouter = require("./equipmentRouter");
const userRouter = require("./userRouter");
const equipmentTypeRouter = require("./equipmentTypeRouter");
const authRouter = require("./authRouter");
const shopsRouter = require("./shopsRouter");

router.use("/drink", drinkRouter);
router.use("/equipment", equipmentRouter);
router.use("/user", userRouter);
router.use("/equipment-type", equipmentTypeRouter);
router.use("/auth", authRouter);
router.use("/shops", shopsRouter);

module.exports = router;
