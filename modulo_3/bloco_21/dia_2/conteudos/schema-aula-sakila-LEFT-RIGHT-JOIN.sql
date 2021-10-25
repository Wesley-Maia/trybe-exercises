-- LEFT JOIN

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name;
