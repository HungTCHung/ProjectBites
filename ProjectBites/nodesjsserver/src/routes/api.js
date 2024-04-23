import express from "express";
import apiController from "../controller/apiController";
import { checkUserJWT } from "../middleware/JWTAction";
import test from "../controller/test";
import userController from "../controller/userController";
import GroupController from "../controller/GroupController";
import newApiController from "../controller/newApiController";
const router = express.Router();

/**
 *
 * @param {*} app :express app
 *
 */

// const checkUserLogin = (req, res, next) => {
//   const nonSecurePaths = ["/", "/test", "/login"];
//   if (nonSecurePaths.includes(req.path)) return next();

//   //authenticate role
//   next();
// };
const initApiRoutes = (app) => {
  router.get("/test-api", apiController.testAPI);
  //rest API
  //get R,post CC,PUT U, DELETE D
  // router.post("/register", apiController.handleRegister);
  // router.post("/login", apiController.handleLogin);

  // router.get("/user/read", userController.readFunc);
  // router.post("/user/create", userController.createFunc);
  // router.put("/user/update", userController.updateFunc);
  // router.delete("/user/delete", userController.deleteFunc);

  // router.get("/group/read", GroupController.readFunc);
  ////////////////////////////////////
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);
  router.post("/test", test.getDataFromUser);
  router.get("/account", userController.getUserAccount);
  router.post("/");
  ///////////////////////////
  return app.use("/api/v1/", router);
};

export default initApiRoutes;
