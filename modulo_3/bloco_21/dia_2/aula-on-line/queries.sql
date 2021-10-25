-- INNER JOIN
SELECT * FROM db.friends;
SELECT * FROM db.pets;

SELECT 
    f.friend_id, f.friend_name, p.owner_id, p.pet_type, p.pet_name
FROM
    db.friends AS f
        INNER JOIN
    db.pets AS p ON f.friend_id = p.owner_id
ORDER BY f.friend_name;

-- LEFT JOIN
SELECT
    f.friend_id, f.friend_name, p.pet_type, p.pet_name
FROM
    db.friends AS f
		LEFT JOIN
	db.pets AS p ON f.friend_id = p.owner_id;

SELECT 
    c.first_name, c.last_name, r.rental_id
FROM
    sakila.customer AS c
        LEFT JOIN
    sakila.rental AS r ON c.customer_id = r.customer_id
WHERE
    r.rental_id = NULL;
    
-- RIGHT JOIN
SELECT
    f.friend_id, f.friend_name, p.pet_type, p.pet_name
FROM
    db.friends AS f
		RIGHT JOIN
	db.pets AS p ON f.friend_id = p.owner_id;
    
-- SELF JOIN
SELECT 
    A.first_name, A.last_name, B.first_name, B.last_name
FROM
    sakila.actor AS A,
    sakila.actor AS B
WHERE
    A.first_name = B.first_name
        AND A.last_name <> B.last_name
        ORDER BY A.first_name;

-- SUBQUERY
SELECT 
    ct.customer_id,
    ct.first_name,
    (SELECT 
            address
        FROM
            sakila.address
        WHERE
            address_id = ct.address_id
        LIMIT 1) AS address
FROM
    sakila.customer AS ct;

SELECT 
    ct.customer_id, ct.first_name, ad.address
FROM
    sakila.customer AS ct
        INNER JOIN
    sakila.address AS ad ON ct.address_id = ad.address_id;
    
SELECT actor_id FROM sakila.film_actor GROUP BY actor_id HAVING COUNT(*) > 20;

SELECT 
    first_name, last_name
FROM
    sakila.actor
WHERE
    actor_id IN (SELECT 
            actor_id
        FROM
            sakila.film_actor
        GROUP BY actor_id
        HAVING COUNT(*) > 20);
        
-- EXISTS
-- https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all
SELECT 
    SupplierName
FROM
    Suppliers
WHERE
    EXISTS( SELECT 
            *
        FROM
            Products
        WHERE
            CategoryID = 7
                AND SupplierID = Suppliers.SupplierID);
                
SELECT 
    SupplierName
FROM
    Suppliers
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Products
        WHERE
            CategoryID = 7
                AND SupplierID = Suppliers.SupplierID);
