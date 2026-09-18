import express from "express";
import dotenv from "dotenv";
import mongooseConnection from "./utility/mongoose.js";
import router from "./Router/routes.js";
dotenv.config()

const Port = process.env.SERVER_PORT || 5050

const app = express();


app.use(express.json());
app.use("/visitors", router)


app.listen(Port, () => {
  mongooseConnection()
  console.log(`Server Running ${Port}`);
});