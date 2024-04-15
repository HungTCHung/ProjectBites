import db from "../models/index";
import bcrypt from "bcryptjs";
const handleUserLogin = async (dataFromClient) => {
  try {
    console.log("check dataFromClient", dataFromClient);
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
        return {
          EM: "oke!",
          EC: 0,
          DT: {
            access_token: "",
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
