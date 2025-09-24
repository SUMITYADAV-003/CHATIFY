import express from "express";
import dotenv from "dotenv";
import authRoute from "./router/auth.Route.js";
import messageRoute from "./router/message.Route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;


app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});