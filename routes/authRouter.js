const Router = require("express");
const bcrypt = require("bcryptjs");
const { check, checkSchema, validationResult } = require("express-validator");
const router = new Router();
const { User } = require("../models/models");

router.post(
  "/register",
  checkSchema({
    // one way check
    email: {
      isEmail: {
        bail: true,
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
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
      const { email, password, name, contact } = req.body;
      const candid = await User.findOne({ where: { email } });
      if (candid) {
        return res.status(400).json({
          message: "Пользователь с таким Email уже существует",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = User.build({
        email,
        password: hashedPassword,
        name,
        contact,
      });
      await user.save();
      return res.status(201).json({ message: "Пользователь создан" });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Введите корректный Email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе в систему",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        res
          .status(404)
          .json({ message: "Пользователь с таким email не найден" });
      }
      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        return res.status(400).json({ message: "Пароли не совпадают" });
      }

      return res.status(201).json({ message: "Пользователь создан" });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
