SELECT
  products.name AS product_name,
  providers.name AS provider_name
FROM products
INNER JOIN providers ON providers.id = products.id_providers
WHERE products.id_categories = 6;