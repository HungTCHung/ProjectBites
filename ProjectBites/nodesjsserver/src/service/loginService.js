require("dotenv").config;
import db from "../models/index";
import bcrypt from "bcryptjs";
import { getGroupWithRole } from "./JWTService";
import { createJWT } from "../middleware/JWTAction";
const handleUserLogin = async (dataFromClient) => {
  try {
    let user = await db.User.findOne({
      where: {
        email: dataFromClient.email,
      },
    });

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
      EM: "loi handleUserLogin",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  handleUserLogin,
};
