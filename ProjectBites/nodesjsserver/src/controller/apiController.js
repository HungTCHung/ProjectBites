// import loginRegisterService from "../service/loginRegisterService";
import loginService from "../../src/service/loginService";
// const testAPI = (req, res) => {
//   return res.status(200).json({
//     message: "oke",
//     data: "test API",
//   });
// };
// const handleRegister = async (req, res) => {
//   try {
//     if (!req.body.email && !req.body.phone && !req.body.password) {
//       return res.status(200).json({
//         EM: "Missing required parameters", //"message "
//         EC: "1", //err code
//         DT: "", //date
//       });
//     }
//     if (req.body.password && req.body.password.length < 4) {
//       return res.status(200).json({
//         EM: "Your password must have more than 3 letters",
//         EC: "-1",
//         DT: "",
//       });
//     }
//     let data = await loginRegisterService.registerNewUser(req.body);
//     //service :create user
//     return res.status(200).json({
//       EM: data.EM, //"message "
//       EC: data.EC, //err code
//       DT: "", //date
//     });
//   } catch (e) {
//     return res.status(500).json({
//       EM: "error", //"message "
//       EC: "-1", //err code
//       DT: "", //date
//     });
//   }
// };

const handleLogin = async (req, res) => {
  try {
    let data = await loginService.handleUserLogin(req.body);
    if (data && data.DT && data.DT.access_token) {
      res.cookie("jwt", data.DT.access_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
    }

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      EM: "Error from handlelogin ",
      EC: "-1",
      DT: "",
    });
  }
  // try {
  //   let data = await loginRegisterService.handleUserLogin(req.body);
  //   return res.status(200).json({
  //     EM: data.EM,
  //     EC: data.EC,
  //     DT: data.DT,
  //   });
  // } catch (e) {
  //   return res.status(500).json({
  //     EM: "Error from handleLogin ",
  //     EC: -1,
  //     DT: "",
  //   });
  // }
};

// const handleLogout = (req, res) => {
//   try {
//     res.clearCookie("jwt");
//     return res.status(200).json({
//       EM: "clear cookies done!",
//       EC: 0,
//       DT: "",
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({
//       EM: "error from server",
//       EC: -1,
//       DT: "",
//     });
//   }
// };
module.exports = {
  // testAPI,
  // handleRegister,
  handleLogin,
  // handleLogout,
};
