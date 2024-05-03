import connection from "../config/DB";

const getGroupWithRole = async (userEmail) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT User.id AS idOfUser, Post.id AS idPostInvolve,
             Group.name, role.url, role.description, Post.createdAt
      FROM (((Post
      INNER JOIN User ON User.id = Post.peopleInvolvePost)
      INNER JOIN \`Group\` ON \`Group\`.id = Post.groupId)
      INNER JOIN group_role ON group_role.groupId = \`Group\`.id)
      INNER JOIN role ON group_role.roleId = role.id
      WHERE User.id = (SELECT User.id FROM User WHERE User.email = ?)
    `,
      [userEmail.dataValues.email],
      (error, results, field) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getGroupWithRole,
};
