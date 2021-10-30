-- PROCEDURES
/*
DELIMITER $$

CREATE PROCEDURE nomeDaProcedure(parametro1, parametro2)
BEGIN
 -- código da procedure aqui
END
$$

DELIMITER ;
*/

DELIMITER $$

CREATE PROCEDURE GerarDataFormatoBrasileiro()
BEGIN

SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', YEAR(NOW()));

END $$
DELIMITER ;

CALL GerarDataFormatoBrasileiro();

--

DELIMITER $$

CREATE PROCEDURE GerarDataFormatoBrasileiroComAno(IN ano INT)
BEGIN

SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', ano);

END $$

DELIMITER ;

SELECT 2020 INTO @ano;
CALL GerarDataFormatoBrasileiroComAno(@ano);

--

DELIMITER $$

CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, OUT estamosNoCarnaval varchar(100))
BEGIN

	DECLARE mensagem varchar(100);
    
    IF (MONTH(NOW()) = 3) THEN
		SET mensagem = 'Estamos no mês do carnaval';
	ELSE
		SET mensagem = 'Não estamos no mês do carnaval';
	END IF;
    
    SELECT mensagem INTO estamosNoCarnaval;

END $$

DELIMITER ;

CALL ChegamosNoCarnaval(2021, @estamosNoCarnaval);
SELECT @estamosNoCarnaval;

--

DELIMITER $$

CREATE PROCEDURE ChegamosNoCarnavalComMes(IN ano INT, INOUT mes INT, OUT estamosNoCarnaval varchar(100))
BEGIN

	-- DECLARE mensagem varchar(100);
    
    IF mes IS NULL THEN
		SET mes = MONTH(NOW());
	END IF;
    
    IF (mes = 3) THEN
		SET mensagem = 'Estamos no mês do carnaval';
	ELSE
		SET mensagem = 'Não estamos no mês do carnaval';
	END IF;
    
    SELECT mensagem INTO estamosNoCarnaval;

END $$

DELIMITER ;

SELECT NULL INTO @mes;
CALL ChegamosNoCarnavalComMes(2020, @mes, @estamosNoCarnaval);
SELECT @mes, @estamosNoCarnaval;

SELECT 3 INTO @mes;
CALL ChegamosNoCarnavalComMes(2020, @mes, @estamosNoCarnaval);
SELECT @mes, @estamosNoCarnaval;

-- FUNCTIONS

/*
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN

  query_sql
  RETURN resultado_a_ser_retornado;
  
END$$

DELIMITER ;
*/

DELIMITER $$

CREATE FUNCTION CalcularTotalVendasCadastradas()
RETURNS INT READS SQL DATA
BEGIN

	DECLARE total_de_vendas INT;
    
    SELECT COUNT(*) FROM sakila.payment INTO total_de_vendas;
    
    RETURN total_de_vendas;

END$$

DELIMITER ;

SELECT CalcularTotalVendasCadastradas();

--

DELIMITER $$

CREATE FUNCTION ObterQuantidadeDeVendasPorCliente(id_cliente INT)
RETURNS INT READS SQL DATA
BEGIN

	DECLARE total_de_vendas INT;
    
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE sakila.payment.customer_id = id_cliente
    INTO total_de_vendas;
    
    RETURN total_de_vendas;

END$$

DELIMITER ;

SELECT 
    customer_id,
    (SELECT OBTERQUANTIDADEDEVENDASPORCLIENTE(customer_id)) AS total_compras
FROM
    sakila.payment;

-- TRIGGERS
/*
CREATE DATABASE IF NOT EXISTS forum;

USE forum;

CREATE TABLE postagem(
    postagem_id INT PRIMARY KEY auto_increment,
    titulo_postagem VARCHAR(150),
    data_abertura DATETIME,
    data_modificacao DATETIME,
    status_postagem VARCHAR(30)
);
*/

DELIMITER $$

CREATE TRIGGER trigger_postagem_insert
	BEFORE INSERT ON postagem
    FOR EACH ROW
BEGIN

	SET NEW.status_postagem = 'Aguardando Aprovação',
		NEW.data_abertura = NOW();

END$$

DELIMITER ;

INSERT INTO forum.postagem (titulo_postagem) VALUES ("Minha Postagem TOP");

--

DELIMITER $$

CREATE TRIGGER trigger_postagem_update
	BEFORE UPDATE ON postagem
    FOR EACH ROW
BEGIN

	SET NEW.data_modificacao = NOW();

END$$

DELIMITER ;

UPDATE forum.postagem 
SET 
    titulo_postagem = 'Postagem muito massa'
WHERE
    postagem_id = 1;
