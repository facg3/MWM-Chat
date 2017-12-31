BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id            serial        PRIMARY KEY,
  email        varchar(100)  NOT NULL UNIQUE,
  username      varchar(100)  NOT NULL UNIQUE,
  password      text          Not NULL
);


CREATE TABLE IF NOT EXISTS posts (
  id         serial       PRIMARY KEY,
  users_id  integer  REFERENCES users(id),
  username  varchar(100) REFERENCES users(username),
  message   text NOT NULL
);



COMMIT;
