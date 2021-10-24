--  Na tabela film, de qual linguagem (language_id) é o filme com o maior custo para substituir (replacement_cost)?

-- Agrupar por language_id
-- MAX(replacement_cost)

SELECT 
	language_id 
FROM 
	film 
GROUP BY language_id 
ORDER BY MAX(replacement_cost) DESC
LIMIT 1

-- Ainda em film, qual classificação (rating) de filmes é aquela que tem a maior soma de custo para substituir (replacement_cost)?

-- Agrupar por classificação
-- SUM (replacement_cost)

SELECT
	rating
FROM
	film
GROUP BY rating
ORDER BY SUM(replacement_cost) DESC
LIMIT 1

-- Na tabela rental, qual cliente (customer_id) devolve (return_date, rental_date) filmes mais rápido, considerando a média de tempo de aluguel por cliente?

-- Agrupar por customer_id
-- AVG(HOUR(timediff(A, B)))

SELECT 
	customer_id,
	AVG(HOUR(timediff(return_date, rental_date))) as tempoMedioAluguel
FROM
	rental
GROUP BY customer_id
ORDER BY tempoMedioAluguel ASC
LIMIT 1