CREATE DATABASE IF NOT EXISTS aula_28_1;

USE aula_28_1;

CREATE TABLE characters
(
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    cartoon VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO characters (name,cartoon)

VALUES ('Abigail','KDN'),
    ('Corvo','Solar Opposities'),
    ('Dexter','Lab de Dexter');
