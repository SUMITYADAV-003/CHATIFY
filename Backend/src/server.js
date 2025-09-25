import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoute from "./router/auth.Route.js";
import messageRoute from "./router/message.Route.js";
// import dbConnection from "./DB/db.connection.js";




dotenv.config();
const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3002;


app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

//make readyfor deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// dbConnection();
app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});