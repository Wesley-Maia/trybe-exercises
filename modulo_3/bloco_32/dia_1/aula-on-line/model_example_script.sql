CREATE DATABASE IF NOT EXISTS mvc_example;

USE mvc_example;

CREATE TABLE cats (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cats (name, age)
VALUES
    ('George', 10);
    