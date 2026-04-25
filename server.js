const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// routes الأول (مهم)
app.use("/api/auth", authRoutes);

// بعد كده DB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});