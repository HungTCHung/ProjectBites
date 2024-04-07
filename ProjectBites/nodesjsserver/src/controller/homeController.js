import userService from "../service/userService";

const testDB = async (req, res) => {
  try {
    let getDataFromTest = await userService.testGetDBData();
    console.log("check test data DB", getDataFromTest);
  } catch (e) {
    console.log(e);
  }
};
const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  console.log(">>check userList", userList);
  return res.render("user.ejs", { userList });
};
const handleCreateNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.createNewUser(email, password, username);
  // userService.getUserList();

  return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
  console.log("check id", req.params.id);
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};
const getUpdateUserPage = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getUserByid(id);
  let userData = {};
  userData = user;
  console.log(">>check userData from get getUpdateUserPage", userData);
  // if (user && user.length > 0) {
  //   userData = user[0];
  // }

  return res.render("user-update.ejs", { userData });
};
const handleUpdateUser = async (req, res) => {
  let email = req.body.email;

  let username = req.body.username;
  let id = req.body.id;

  await userService.updateUserInfor(email, username, id);
  return res.redirect("/user");
};
module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdateUserPage,
  handleUpdateUser,
  testDB,
};