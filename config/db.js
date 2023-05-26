const mongoose = require("mongoose");

// mongoose requires you to work with promises
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    console.error({ error: err, message: "MongoDB has failed to connect." });
    process.exit(1);
  }
};

module.exports = connectDB;
