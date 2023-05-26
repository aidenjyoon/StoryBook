const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

// connecting to mongodb
connectDB();

// init app with express
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// to use .hbs extension
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
);
