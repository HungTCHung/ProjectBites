require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import connection from "./config/connectDB";
import configCors from "./config/cors";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 8080;

configCors(app);
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection();
initWebRoutes(app);
initApiRoutes(app);

app.use((req, res) => {
  return res.send("404 not found!");
});
app.listen(PORT, () => {
  console.log(">>>Backend is running on port  " + PORT);
});
