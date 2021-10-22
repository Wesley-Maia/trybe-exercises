-- INSERT
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Sabrina', 'Gomez');

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 2;

INSERT INTO sakila.actor (actor_id, first_name, last_name)
VALUES (201, 'Sabrina', 'Gomez');

INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Robbins', 'Ferris'), ('Tim', 'Souza');

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 2;

INSERT IGNORE INTO sakila.actor (actor_id, first_name, last_name)
VALUES (203, 'Robbins', 'Ferris'), (204, 'Tim', 'Souza'), (205, 'Charles', 'Carson');

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 2;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- 5 row(s) affected Records: 5  Duplicates: 0  Warnings: 0

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 5;

-- UPDATE

UPDATE sakila.actor SET first_name = 'Roz';

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

UPDATE sakila.actor SET first_name = 'Roz' WHERE first_name = 'Robbins';

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

UPDATE sakila.actor SET first_name = 'Roz' WHERE actor_id = 204;

-- 1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0

SELECT first_name, last_name from sakila.actor WHERE actor_id = 204;

SET SQL_SAFE_UPDATES = 0;

-- 0 row(s) affected

UPDATE sakila.actor SET first_name = 'Roz';

-- 209 row(s) affected Rows matched: 210  Changed: 209  Warnings: 0

SELECT * FROM sakila.actor;

-- 200 row(s) returned

UPDATE cadastro_clientes
SET mensalidades_pagas = 1, valor_mensalidade = 69.99
WHERE cliente_id = 99;

UPDATE roupas
SET valor = valor * 0.7
WHERE roupa_id IN (35, 67, 43, 674, 342, 342, 534, 546);

UPDATE roupas 
SET 
    valor = (CASE
        WHEN tipo = 'inverno' THEN valor * 0.7
        WHEN tipo = 'verao' THEN valor * 1.1
        ELSE valor
    END);
    
UPDATE clientes 
SET 
    saldo = saldo + 10
ORDER BY data_cadastro DESC LIMIT 10;

-- DELETE

DELETE FROM sakila.actor;

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.actor;

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sakila`.`film_actor`, CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

DELETE FROM sakila.film_text 
WHERE
    title = 'ALASKA PHANTOM';

-- ON DELETE RESTRICT | NO ACTION
/* Você está tentando excluir uma empresa que está sendo usada no registro de um usuário. ON DELETE NO ACTION ou ON DELETE RESTRICT não permitirá que essa ação seja executada */
-- ON DELETE SET NULL
/* Você está tentando excluir uma empresa que está sendo usada no registro de um usuário. ON DELETE SET NULL permitirá que essa ação seja executada e irá setar como NULL na tabela usuário a referência para o id da empresa que existia anteriormente.*/
-- ON DELETE CASCADE
/* Você está tentando excluir uma empresa que está sendo usada no registro de um usuário. ON DELETE CASCADE permite que você faça isso e ainda exclui todas as referências dos registros que usam a empresa_id que foi excluída. */

-- TRUNCATE

TRUNCATE sakila.film_text;

/* O TRUNCATE apaga todos os registros da tabela E reseta o contador do AUTO_INCREMENT */
