const { Sequelize } = require("sequelize");

const DB_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : "postgres://beer:beer@127.0.0.1:5432/beer";
const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
module.exports = sequelize;
