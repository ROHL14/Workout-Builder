const express = require("express");
const cors = require("cors");
const app = express();

// SETTINGS
const PORT = process.env.PORT || 3001;
app.set("port", PORT);

// MIDDLEWARES
// Cors let two server exchange datas beetwen themselves
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/users", require("./routes/users"));
app.use("/api/workouts", require("./routes/workouts"));

module.exports = app;
