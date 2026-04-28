<<<<<<< HEAD
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
=======
require("dotenv").config();
const express = require("express");
<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const connectDB = require("./config/db");
>>>>>>> b059437 (gui + editing some problems)

const app = express();
app.use(express.json());
app.use(express.static("public"));

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));
app.use("/manager", require("./routes/manager"));
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server running"));
=======
connectDB();

app.use("/auth",    require("./routes/auth"));
app.use("/admin",   require("./routes/admin"));
app.use("/manager", require("./routes/manager"));
app.use("/user",    require("./routes/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> b059437 (gui + editing some problems)
>>>>>>> recovery-branch
