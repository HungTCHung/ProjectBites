require("dotenv").config();
import jwt from "jsonwebtoken";

const createJWT = () => {
  let token = jwt.sign({ foo: "bar" }, "secret");
};
