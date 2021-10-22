-- UPDATE
USE sakila;
SELECT * FROM sakila.staff;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- Vamos praticar o DELETE
-- 1- Exclua do banco de dados o ator com o nome de "KARL".
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2- Exclua do banco de dados os atores com o nome de "MATTHEW".
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

-- 4- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- 5- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- Solução
-- Inspecionar e analisar uma a uma.

-- 6- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
