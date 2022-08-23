const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const { User } = require("../models/models");

class UserController {
  async registration(req, res) {
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

      const hashedPassword = await bcrypt.hash(password, 12);
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

  async login(req, res) {
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

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Пароли не совпадают" });
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      res.json({ token, userId: user.id, message: "Вы вошли" });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
}

module.exports = new UserController();
