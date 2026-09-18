import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongooseConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
    console.log(connection.connection.host);
    console.log(process.env.MONGO_URI);

  } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default mongooseConnection;