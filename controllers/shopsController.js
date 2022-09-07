const { Shop } = require("../models/models");

class ShopsController {
  async getAll(req, res) {
    try {
      const shops = await Shop.findAll();
      return res.json(shops);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, addres, contact, userId, technikId, salesId } = req.body;
      await Shop.update(
        { name, addres, contact, technikId, salesId, userId },
        {
          where: { id },
        }
      );
      return res.json(` returned id is ${id}`);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const { name, addres, contact, userId, technikId, salesId } = req.body;
      const newShop = await Shop.create({
        name,
        addres,
        contact,
        userId,
        technikId,
        salesId,
      });
      return res.json(newShop);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async remove(req, res) {
    try {
      const { id } = req.params;
      await Shop.destroy({ where: { id } });
      return res.json(id);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ShopsController();
