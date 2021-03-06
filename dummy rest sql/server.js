require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 1000 || process.env.PORT;
const morgan = require("morgan");
const cityRoutes = require("./route/city");
const sequelize = require("./model/index");

app.use(express.json());

app.use(morgan("dev"));

// * Routing
app.use(cityRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    statusCode: "200",
    message: "🌲🚚Welcome To DUMMY API",
  });
});
app.get("*", function (req, res) {
  res.status(404).json({ success: false, message: "Nothing In this Route..." });
});

// * Database
(async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync();
    // await sequelize.sync({ alter: true });
    log.info("MySQL Connected");
  } catch (error) {
    log.error("Database Connection Failure ", error);
    process.exit(1);
  }
})();

// * Server Listen
app.listen(PORT, (err) => {
  if (err) {
    log.error(`Error : ${err}`);
    process.exit(1);
  }
  log.info(`Server is Running On Port : ${PORT}`);
});
