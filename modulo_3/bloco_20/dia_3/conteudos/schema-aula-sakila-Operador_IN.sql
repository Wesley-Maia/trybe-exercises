-- Operador IN
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED');

SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);
