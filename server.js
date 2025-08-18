const express = require("express");
const PORT = 2020;
const sequelize = require("./database/database");
const router = require("./routes/artisteRouter");

const app = express();

app.use(express.json());

app.use(router);

const database = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};
database();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
