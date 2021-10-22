-- INSERT INTO
USE sakila;
INSERT INTO sakila.actor (first_name, last_name)
	VALUES('Marcelo','Santos');

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.actor;

-- Prática 
-- 1- Insira um novo funcionário na tabela sakila.staff .
INSERT INTO sakila.staff (active, address_id, email, first_name, last_name, store_id, username)
	VALUES(1, 5, 'a1@teste', 'souza', 'chaves', 2, 'Xar');

-- 2- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (active, address_id, email, first_name, last_name, store_id, username)
	VALUES
    (1, 5, 'a2@teste', 'marcelo', 'chaves', 2, 'Wolf'),
    (1, 6, 'a3@teste', 'torres', 'neto', 2, 'sun');
    
-- 3- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
	SELECT sakila.customer.first_name, sakila.customer.last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
    
-- 4- Cadastre três categorias de uma vez só na tabela sakila.category .
-- SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
	Value
	('Teste 1'),
	('Teste 2'),
	('Teste 3');

-- 5- Cadastre uma nova loja na tabela sakila.store .
-- SELECT * FROM sakila.store;  
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
