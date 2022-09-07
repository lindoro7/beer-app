const { check, checkSchema } = require("express-validator");
const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post(
  "/register",
  checkSchema({
    // one way check
    login: {
      isLength: {
        options: { min: 3 },
        errorMessage: "Минимум 3 символа",
      },
    },
    password: {
      isLength: {
        errorMessage: "Пароль должен быть минимум 6 символов",
        options: { min: 6 },
      },
    },
    // name: {
    //   isLength: {
    //     errorMessage: "Имя должно быть минимум 3 символа",
    //     options: { min: 3 },
    //   },
    // },
    // contact: {
    //   isLength: {
    //     errorMessage: "телефон должен содержать 10 цифр",
    //     options: { min: 10, max: 10 },
    //   },
    // },
  }),
  userController.registration
);

router.post(
  "/login",
  [
    //another way check
    check("login", "Минимум 3 символа").exists().isLength({ min: 3 }),
    check("password", "Пароль должен быть минимум 6 символов")
      .exists()
      .isLength({ min: 6 }),
  ],
  userController.login
);

router.post(
  "/logout",

  userController.logout
);

module.exports = router;
