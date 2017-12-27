BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id            serial        PRIMARY KEY,
  email        varchar(100)  NOT NULL UNIQUE,
  username      varchar(100)  NOT NULL UNIQUE,
  password      text          Not NULL
);


INSERT INTO users(email, username, password) VALUES('negmah@hotmail.com', 'Marwa', '123456');

CREATE TABLE IF NOT EXISTS posts (
  id         serial       PRIMARY KEY,
  users_id  integer  REFERENCES users(id),
  username  varchar(100) REFERENCES users(username),
  message    varchar(100) NOT NULL
);

INSERT INTO posts(users_id, username, message)VALUES(1, 'Marwa', 'WELCOME');


COMMIT;
