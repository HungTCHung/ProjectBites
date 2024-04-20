import connection from "../config/DB";

const getGroupWithRole = async (userEmail) => {
    // try{
    //     const [results,fields]=await connection.query(`
    //     ""
    //     `)
    // }catch(e){
    //     console.log(e)
    // }
  connection.query(`
    SELECT User.id AS idOfUser, Post.id AS idPostInvolve, Post.content, Post.hastag,
           Group.name, group_role.roleId, role.url, role.description, Post.createdAt
    FROM (((Post
    INNER JOIN User ON User.id = Post.peopleInvolvePost)
    INNER JOIN \`Group\` ON \`Group\`.id = Post.groupId)
    INNER JOIN group_role ON group_role.groupId = \`Group\`.id)
    INNER JOIN role ON group_role.roleId = role.id
    WHERE User.id = (SELECT User.id FROM User WHERE User.email = "test1@gmail.com")
  `, (error, results, field) => {
    if (error) {
      console.log(error);
    }
    let data = results;
    console.log("check kq", data);
  });
};

module.exports = {
  getGroupWithRole,
};
