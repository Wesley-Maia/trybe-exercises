-- IF / CASE
SET @age = 14;
SELECT IF(@age < 18, 'Di menor', 'Di maior');

SELECT title, release_year, length, CASE
 WHEN length <= 60 THEN 'Curta duração'
 WHEN length <= 150 THEN 'Média duração'
 ELSE 'Longa duração'
END AS film_duration_type FROM sakila.film;

-- STRINGS
-- Explique como cada comando a seguir funciona, sugestão de explicação em frente
SELECT LENGTH(title) FROM sakila.film; -- exibe tamanho da string em bytes passada como parâmetro
SELECT CHAR_LENGTH(title) FROM sakila.film; -- exibe tamanho da string em caracters passada como parâmetro

SELECT UCASE(title) FROM sakila.film; -- transforma em caixa alta a string passada como parâmetro

SELECT LCASE(title) FROM sakila.film; -- transforma em caixa baixa a string passada como parâmetro

SELECT REPLACE(title, 'A', '4') FROM sakila.film; -- substitui todas as ocorrências de 'A' por '4' na coluna title

-- O índice no SQL é iniciado do 1 e não do 0
SELECT LEFT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da esquerda
SELECT RIGHT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da direita

-- SUBSTRING(string, posição_inicial)
SELECT SUBSTRING('Curso BeTrybe', 6); -- extrai uma string, começando a partir do sexto caractere à esquerda

-- SUBSTRING(string, posição_inicial, tamanho)
SELECT SUBSTRING('Curso BeTrybe', 2, 4); -- extrai uma string de tamanho 4, começando a partir do segundo caractere à esquerda
SELECT SUBSTRING('Curso BeTrybe', -5, 6); -- extrai uma string de tamanho 6, começando a partir do quinto caractere à direita

-- Matemática
SELECT 20 / 3;

SELECT 20 DIV 3; -- retorna uma divisão inteira

SELECT 10 MOD 3; -- retorna o resto de uma divisão inteira

SELECT ROUND(20.45, 1); -- permite arredondar um valor
 
SELECT CEIL(20.51); -- arredonda para o número inteiro (cima)
 
SELECT FLOOR(10.51); -- arredonda para o número inteiro (baixo)
 
SELECT POW(2, 5); -- potenciação onde temos X elevado a Y.
 
SELECT SQRT(16); -- retorna a raiz quadrada

-- Data
SELECT CURRENT_DATE();
SELECT NOW();
SELECT DATEDIFF('2020-05-31', '2020-05-01'); -- Primeira data - Segunda data
-- UNIX EPOCH
SELECT DATEDIFF(return_date, rental_date) FROM sakila.rental;

SELECT TIMEDIFF('05:15:30', '06:15:30');
SELECT TIMEDIFF('05:15:30', '05:12:30');
SELECT TIMEDIFF(return_date, rental_date) FROM sakila.rental;

SELECT YEAR(rental_date) FROM sakila.rental;
SELECT MONTH(rental_date) FROM sakila.rental;
SELECT DAY(rental_date) FROM sakila.rental;
SELECT HOUR(rental_date) FROM sakila.rental;
SELECT MINUTE(rental_date) FROM sakila.rental;
SELECT SECOND(rental_date) FROM sakila.rental;

-- AGGREGATE
SELECT AVG(rental_duration) FROM sakila.film;
SELECT MIN(rental_duration) FROM sakila.film;
SELECT MAX(rental_duration) FROM sakila.film;
SELECT SUM(rental_duration) FROM sakila.film;
SELECT COUNT(rental_duration) FROM sakila.film;

-- GROUP BY
SELECT rating FROM sakila.film GROUP BY rating;
SELECT * FROM sakila.film GROUP BY rating;
SELECT rating, AVG(replacement_cost) FROM sakila.film GROUP BY rating;

SELECT customer_id, COUNT(*) AS quantidade_filmes FROM sakila.rental GROUP BY customer_id;

-- HAVING

SELECT
    customer_id, COUNT(*) AS quantidade_filmes
FROM
    sakila.rental
WHERE customer_id <= 200
GROUP BY customer_id
HAVING quantidade_filmes <= 50
ORDER BY quantidade_filmes DESC;

/*
ORDEM DE EXECUÇÃO:
	Cláusula FROM
	Cláusula WHERE
	Cláusula GROUP BY
	Cláusula HAVING
	Cláusula SELECT
	Cláusula ORDER BY
/*
