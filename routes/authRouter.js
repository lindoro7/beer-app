const { check, checkSchema } = require("express-validator");
const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post(
  "/register",
  checkSchema({
    // one way check
    email: {
      isEmail: {
        bail: true,
        errorMessage: "Введите корректный email",
      },
    },
    password: {
      isLength: {
        errorMessage: "Пароль должен быть минимум 6 символов",
        options: { min: 6 },
      },
    },
    name: {
      isLength: {
        errorMessage: "Имя должно быть минимум 3 символа",
        options: { min: 3 },
      },
    },
    contact: {
      isLength: {
        errorMessage: "телефон должен содержать 10 цифр",
        options: { min: 10, max: 10 },
      },
    },
  }),
  userController.registration
);

router.post(
  "/login",
  [
    //another way check
    check("email", "Введите корректный Email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  userController.login
);

module.exports = router;
