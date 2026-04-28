const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const managerRoutes = require("./routes/managerRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", managerRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
