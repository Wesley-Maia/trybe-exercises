USE sakila;
DELIMITER $$;

-- Procedure sem parâmetros
CREATE PROCEDURE ObterNomeAtores()
BEGIN
	SELECT first_name FROM actor;
END $$;

DELIMITER ;

-- Procedure sem parâmetros
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Procedure com parâmetros de entrada
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
SELECT * FROM sakila.actor
WHERE first_name LIKE CONCAT('%',syllable,'%');
END $$

DELIMITER ;

-- Procedure com parâmetros de saída
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllAverageRentalDurationOfMovie(
	IN film_name VARCHAR(300),
	OUT media_aluguel_em_dias DOUBLE
)
BEGIN
	SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
	WHERE title = film_name;
END $$

DELIMITER ;



-- Para Fixar
-- 1- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterAtoresPopulares()
BEGIN
	SELECT 
	actor_id,
    COUNT(*) AS 'Quantidade de filmes'
	FROM sakila.film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
	LIMIT 10;
END $$

DELIMITER ;

-- 2- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ObterFilmesCategorias(IN CategoryName VARCHAR(100))
BEGIN
SELECT 
	F.film_id AS 'Filme ID',
	F.title AS 'Título',
    C.category_id AS 'Categoria ID',
    C.name AS 'Categoria nome'
FROM sakila.film AS F
INNER JOIN sakila.film_category AS FC
ON F.film_id = FC.film_id

INNER JOIN sakila.category AS C
ON FC.category_id = C.category_id

WHERE C.name = CategoryName;
END $$

DELIMITER ;

-- 3- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaStatusCliente(
IN EmailCliente VARCHAR(200),
OUT MsgStatus VARCHAR(200)
)
BEGIN
SELECT 
	CONCAT('Status do cliente: ', active) INTO MsgStatus
    FROM sakila.customer
    WHERE email = EmailCliente;
END $$

DELIMITER ;
