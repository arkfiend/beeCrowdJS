SELECT
P.id, P.name
FROM products P
INNER JOIN categories C ON C.id = P.id_categories
WHERE C.name like 'super%';


