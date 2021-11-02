-- Desafios sobre ALTER TABLE

-- 1- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

-- 2- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN region_name region VARCHAR(25);

-- 3- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN country_name country VARCHAR(40);
