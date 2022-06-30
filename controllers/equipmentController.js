const Equipment = require("../models/models");

class EquipmentController {
  async getAll(req, res) {
    try {
      const equipments = await Equipment.findAll();
      return res.json(equipments);
    } catch (error) {
      console.error(err.message);
    }
  }

  async getOne(req, res) {}

  async create(req, res) {
    try {
      const { name, equipmentTypeId } = req.body;
      const newEquipment = await Equipment.create({
        name,
        equipmentTypeId,
      });
      return res.json(newEquipment);
    } catch (error) {
      console.error(error.message);
    }
  }

  async remove(req, res) {}
}

module.exports = new EquipmentController();
