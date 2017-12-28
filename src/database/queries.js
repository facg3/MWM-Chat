const connection = require("./dbConnection");
const bcrypt = require('bcrypt');

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

const passwordUserFromDb = (dataUser,cb) =>{
  const sql = {text:`SELECT password FROM users WHERE username= 'mahmoud'`};
  connection.query(sql,(errInPasswordUser,result) =>{
    if (errInPasswordUser) {
      cb(errInPasswordUser);
    }
    else {
      const passwordFromDB = result.rows[0].password;
      const passwordFromUser = dataUser.password;
      const passwordCom = bcrypt.compareSync(passwordFromUser,passwordFromDB);
      cb(null,passwordCom);
    }
  })
}


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

const register=(data,callback)=>{
  var salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(data.password,salt);
  const sql = {
  text: "INSERT INTO users (username,password,email) VALUES ($1,$2,$3)",
  values: [`${data.username}`, `${passwordHash}`, `${data.email}`]}
  connection.query(sql, (errRegister) => {
    if (errRegister) {
      callback(errRegister,null);
    } else {
      callback(null,true);
    }
  });
}
module.exports = {
  login,
  allPost,
  register,
  passwordUserFromDb
};
// console.log('hre  is password hashed ',passwordHash);
