import connection from "../config/DB";

const getDataFromUser = (req, res) => {
  connection.query("select * from User", (error, results, field) => {
    if (error) {
      console.log(error);
    }
    let data = results;
    console.log("check kq", data);
  });
};
module.exports = {
  getDataFromUser,
};
