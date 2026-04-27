const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const managerRoutes = require("./routes/managerRoutes");

const app = express();
console.log("authRoutes:", typeof authRoutes);
console.log("userRoutes:", typeof userRoutes);
console.log("adminRoutes:", typeof adminRoutes);
console.log("managerRoutes:", typeof managerRoutes);
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", managerRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});