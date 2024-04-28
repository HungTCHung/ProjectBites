require("dotenv").config;
import db from "../models/index";
import bcrypt from "bcryptjs";
import { getGroupWithRole } from "./JWTService";
import { createJWT } from "../middleware/JWTAction";

const handleUserLogin = async (dataFromClient) => {
  console.log("check data", dataFromClient);
  try {
    let user = await db.User.findOne({
      where: {
        email: dataFromClient.email,
      },
    });
    console.log("check user nodejs ", user);
    if (user) {
      let userPassword = await db.User.findOne({
        where: {
          password: dataFromClient.password,
        },
      });

      if (userPassword) {
        let groupWithRole = await getGroupWithRole(user);

        let payload = {
          groupWithRole,
          expiresIn: process.env.JWT_EXPIRES_IN,
        };
        let token = createJWT(payload);
        return {
          EM: "oke!",
          EC: 0,
          DT: {
            userId: user.id,
            email: user.email,
            username: user.username,
            access_token: token,
            groupWithRole,
          },
        };
      }
    }
    return {
      EM: "sai tk!",
      EC: -1,
      DT: "",
    };
  } catch (e) {
    console.log(e);
    return {
      EM: "loi handleUserLogin 123",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  handleUserLogin,
};
