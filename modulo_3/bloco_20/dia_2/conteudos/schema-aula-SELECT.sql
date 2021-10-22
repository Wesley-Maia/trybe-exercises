-- Monte uma query que exiba seu nome na tela
SELECT 'Wesley Maia';

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela
SELECT 'Wesley', 'Maia', 'Montes Claros', 38;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS
SELECT 'Wesley' AS Nome, 'Maia' AS Sobrenome, 'Montes Claros' AS Cidade, 38 AS Idade;

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT
SELECT 18 * 3;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';