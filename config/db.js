const mongoose = require("mongoose");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect("mongodb://localhost:27017/auth_system");
    console.log("MongoDB connected");
=======
<<<<<<< HEAD
    await mongoose.connect("mongodb+srv://farahnegm90_db_user:PqKSFgGJgxkXzSSU@cluster0.omn7g5s.mongodb.net/auth_system?retryWrites=true&w=majority");
    console.log("MongoDB Atlas connected");
>>>>>>> recovery-branch
  } catch (err) {
    console.log("DB error:", err);
  }
};

module.exports = connectDB;
<<<<<<< HEAD
=======
=======
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
>>>>>>> b059437 (gui + editing some problems)
>>>>>>> recovery-branch
