const { EquipmentType } = require("../models/models");

class EquipmentTypeController {
  async getAll(req, res) {
    try {
      const types = await EquipmentType.findAll();
      return res.json(types);
    } catch (error) {
      console.error(err.message);
    }
  }

  async getOne(req, res) {}

  async create(req, res) {
    try {
      const { name } = req.body;
      const newType = await EquipmentType.create({ name });
      return res.json(newType);
    } catch (error) {
      console.error(error.message);
    }
  }

  async remove(req, res) {}
}

module.exports = new EquipmentTypeController();
