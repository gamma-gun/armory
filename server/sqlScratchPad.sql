CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    last_name VARCHAR(30),
    first_name VARCHAR(30),
    email VARCHAR(30)
);


INSERT INTO users (last_name, first_name, email)
  VALUES ('Suffy','Joe', 'snuffy@example.com'), ('dingus','smelly', 'dingus@example.com');


