const express = require("express");
const app = express();

const connectDB = require("./config/db");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extender: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/exercises", require("./routes/api/exercices"));
app.use("/api/routines", require("./routes/api/routines"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
