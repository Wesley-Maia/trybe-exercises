-- CREATE TABLE LIK
CREATE TABLE actor_clone LIKE sakila.actor;

-- Comparando as tabelas
SHOW COLUMNS FROM sakila.actor;
SHOW COLUMNS FROM sakila.actor_clone;

-- Copiando os dados
INSERT INTO actor_clone (actor_id, first_name, last_name, last_update)
SELECT actor_id, first_name, last_name, last_update FROM sakila.actor;

-- Copiando tabela e dados para outro banco
CREATE DATABASE DB;
CREATE TABLE DB.actor LIKE sakila.actor;
SHOW COLUMNS FROM DB.actor;
INSERT INTO DB.actor (actor_id, first_name, last_name, last_update)
SELECT * FROM sakila.actor;

-- ALTER TABLE

-- Adicionando uma coluna
ALTER TABLE sakila.actor ADD COLUMN country VARCHAR(255) NOT NULL DEFAULT "Brazil";

-- Alterando o tipo de uma coluna
ALTER TABLE sakila.actor MODIFY country CHAR(2) NOT NULL DEFAULT "BR";

-- Error Code: 1406. Data too long for column 'country' at row 1
SET SQL_SAFE_UPDATES = 0;
UPDATE sakila.actor SET country = "BR";

-- Alterando o nome de uma coluna
ALTER TABLE sakila.actor CHANGE country country_id CHAR(2);
UPDATE sakila.actor SET country_id = NULL;
ALTER TABLE sakila.actor MODIFY country_id INT DEFAULT 1;

-- Dropando uma coluna
ALTER TABLE sakila.actor DROP COLUMN country_id;

-- DROP TABLE
DROP TABLE sakila.actor_clone;

DROP TABLE sakila.rental;
-- Error Code: 3730. Cannot drop table 'rental' referenced by a foreign key constraint 'fk_payment_rental' on table 'payment'.

DROP TABLE sakila.payment;
DROP TABLE sakila.rental;

CREATE TABLE Users (
	id INT auto_increment PRIMARY KEY,
    email VARCHAR(250) UNIQUE
);

CREATE TABLE Orders (
	id INT auto_increment PRIMARY KEY,
    user_email VARCHAR(205),
    CONSTRAINT FOREIGN KEY (user_email) REFERENCES Users (email)
);

ALTER TABLE Users DROP COLUMN email;
--  Cannot drop column 'email': needed in a foreign key constraint 'Orders_ibfk_1' of table 'Orders'

-- VIEWS

-- Criando uma VIEW
CREATE view FilmesDentroDasCategoriasPreferidas
AS
  SELECT title
  FROM   sakila.film f
         INNER JOIN sakila.film_category fc
                 ON f.film_id = fc.film_id
  WHERE  fc.category_id IN ( 1, 2, 5, 10, 14 );

-- Utilizando uma view
SELECT * FROM FilmesDentroDasCategoriasPreferidas WHERE title LIKE 'a%';

-- Dropando uma view

DROP VIEW FilmesDentroDasCategoriasPreferidas;

-- Índices
-- INDEX simples
-- Criando
CREATE INDEX index_country ON sakila.country (country);

SELECT * FROM sakila.country WHERE country = 'Sudan';
SELECT COUNT(*) FROM sakila.country;

-- Dropando
DROP INDEX index_country ON sakila.country;

-- FULLTEXT INDEX
-- Criando
CREATE FULLTEXT INDEX description_index
ON sakila.film (description);

-- Dropando 
DROP INDEX description_index ON sakila.film;

SELECT * FROM sakila.film
WHERE MATCH (description)
AGAINST('of a Pastry Chef And a Woman who must Chase');

SELECT * FROM sakila.film
WHERE description LIKE '%of a Pastry Chef And a Woman who must Chase%';

