const connection = require("./dbconnection");

const login = (dataUser,callback) => {
  const sql = {text:`SELECT * FROM users WHERE username = $1 AND password = $2`,values:[dataUser.name,dataUser.password]}
  connection.query(sql, (errUsers, result) => {
    if (errUsers) {
      console.log(errUsers);
      callback(errUsers);
    } else {
      callback(result.rows);
    }
  })
};


const allPost = (callback) => {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (errPosts, result) => {
    if (errPosts) {
      console.log(errPosts);
      callback(errPosts);
    } else {
      callback(result.rows);
    }
  });
};

module.exports = {
  login,
  allPosts
};
