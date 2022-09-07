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
      const { login, password, name = null, contact = null } = req.body;
      const candid = await User.findOne({ where: { login } });
      if (candid) {
        return res.status(400).json({
          message: "Пользователь с таким Логином уже существует",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = User.build({
        login,
        password: hashedPassword,
        name,
        contact,
      });
      await user.save();
      return res.status(201).json({ user, message: "Пользователь создан" });
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
      const { login, password } = req.body;
      const user = await User.findOne({ where: { login } });

      if (!user) {
        throw new Error("Пользователь с таким Логином не найден");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error("Пароли не совпадают");
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      return res.json({ token, user, message: "Вы вошли" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async logout(req, res) {
    try {
      const user = {
        id: "",
        name: "",
        role: "",
        email: "",
        contact: "",
      };
      res.json({ user });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll({
        order: [["name", "ASC"]],
      });
      return res.json({ users });
    } catch (error) {
      console.log(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { role, contact, name } = req.body;
      const result = await User.update(
        { role, contact, name },
        { where: { id } }
      );
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async remove(req, res) {
    try {
      const { id } = req.params;
      const result = User.destroy({ where: { id } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
