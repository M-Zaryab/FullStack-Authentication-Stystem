const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    // app.on("error", (err) => {
    //   console.log("ERROR: ", err);
    //   throw err;
    // });
    console.log(
      `MONGODB_CONNECTED !! DB_HOST: `,
      connectionInstance.connection.host
    );
  } catch (err) {
    console.log("Mongodb connection error: ", err);
    process.exit(1); // 1 -> Failed | 0 -> Success
  }
};

connectDB();
