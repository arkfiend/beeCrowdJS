 SELECT C.name, sum(P.amount)
 FROM products P INNER JOIN categories C ON C.id = P.id_categories
 GROUP BY C.name;