require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const path = require("path");

const router = require("./routes");
const {
  User,
  Shop,
  Equipment,
  ShopEquipment,
  EquipmentType,
} = require("./models/models");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
process.env.NODE_ENV === "production"
  ? app.use(express.static(path.join(__dirname, "client", "build")))
  : app.use(express.static(path.join(__dirname, "client", "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    // await sequelize.sync({ force: true });
    // await EquipmentType.bulkCreate([
    //   { name: "Пеногасители" },
    //   { name: "Заборные головки" },
    //   { name: "Охладители" },
    //   { name: "Редукторы" },
    //   { name: "Краны" },
    //   { name: "Башни" },
    // ]);

    // await Equipment.bulkCreate([
    //   { name: "Заборная головка тип A", equipmentTypeId: 2 },
    //   { name: "Заборная головка тип G", equipmentTypeId: 2 },
    //   { name: "Заборная головка тип S", equipmentTypeId: 2 },
    // ]);

    // await User.bulkCreate([
    //   {
    //     name: "Vova",
    //     email: "v@v.ru",
    //     password: "123456",
    //     contact: "1234567890",
    //   },
    //   {
    //     name: "Jim",
    //     email: "j@j.ru",
    //     password: "123456",
    //     contact: "1234567890",
    //   },
    // ]);

    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
