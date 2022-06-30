const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  name: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.STRING, allowNull: false },
});

const Shop = sequelize.define("shop", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  addres: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.INTEGER, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

const Equipment = sequelize.define("equipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  equipmentTypeId: { type: DataTypes.INTEGER, allowNull: false },
});

const EquipmentType = sequelize.define("equipmentType", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const ShopEquipment = sequelize.define("shopEquipment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shopId: { type: DataTypes.INTEGER, allowNull: false },
  equipmentId: { type: DataTypes.INTEGER, allowNull: false },
  total: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Shop);
Shop.belongsTo(User);

EquipmentType.hasOne(Equipment);
Equipment.belongsTo(EquipmentType);

Shop.belongsToMany(Equipment, { through: ShopEquipment });
Equipment.belongsToMany(Shop, { through: ShopEquipment });

module.exports = {
  User,
  Shop,
  Equipment,
  ShopEquipment,
  EquipmentType,
};
