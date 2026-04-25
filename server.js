require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));
app.use("/manager", require("./routes/manager"));
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server running"));
