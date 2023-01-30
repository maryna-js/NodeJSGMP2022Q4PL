CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  age INTEGER,
  isDeleted BIT
);

INSERT INTO Users
VALUES ("1","test01@gmail.com","password1",18, 0)
INSERT INTO Users
VALUES ("2","test02@gmail.com","password2",19, 0)
INSERT INTO Users
VALUES ("3","test03@gmail.com","password3",20, 0)
INSERT INTO Users
VALUES ("4","test04@gmail.com","password4",21, 0)