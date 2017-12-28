const connection = require("./dbConnection");
const bcrypt = require('bcrypt');



const passwordUserFromDb = (dataUser,cb) =>{
  const sql = {text:`SELECT * FROM users WHERE username= $1` , values : [dataUser.username]};
  connection.query(sql,(errInPasswordUser,result) =>{
    if (errInPasswordUser) {
      cb(errInPasswordUser);
    }
    else {
      const passwordFromDB = result.rows[0].password;
      const passwordFromUser = dataUser.password;
      const passwordCom = bcrypt.compareSync(passwordFromUser,passwordFromDB);
      cb(null,passwordCom,result.rows);
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
      console.log("qqqqqqq",result.rows);
      callback(null,result.rows);
    }
  });
};

const message = (dataMessage,callback) =>{
  const sql = {
    text:"INSERT INTO posts (users_id ,username,message) VALUES ($1,$2,$3)",
    values : [`${dataMessage.users_id}`,`${dataMessage.username}`,`${dataMessage.message}`]}
    connection.query(sql, (errMessage) => {
      if (errMessage) {
        callback(errMessage,null);
      } else {
        callback(null,true);
      }
    });
}

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
  allPost,
  register,
  passwordUserFromDb,
  message
};
// console.log('hre  is password hashed ',passwordHash);
