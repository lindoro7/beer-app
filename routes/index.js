const Router = require("express");
const router = new Router();

const drinkRouter = require("./drinkRouter");
const equipmentRouter = require("./equipmentRouter");
const userRouter = require("./userRouter");
const equipmentTypeRouter = require("./equipmentTypeRouter");
const authRouter = require("./authRouter");

router.use("/drink", drinkRouter);
router.use("/equipment", equipmentRouter);
router.use("/user", userRouter);
router.use("/equipment-type", equipmentTypeRouter);
router.use("/auth", authRouter);

module.exports = router;
