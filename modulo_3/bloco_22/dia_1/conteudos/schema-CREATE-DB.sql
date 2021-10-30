/*
##SINTAXE##
CREATE TABLE nome_tabela(
  coluna1 tipo constraint,
  coluna2 tipo constraint,
  coluna3 tipo constraint,
  ...
) ENGINE = 'nome_engine'
*/

CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artistas(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
) ENGINE = InnoDB;

CREATE TABLE estilomusical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  artist_id INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  preco DECIMAL(5,2) NOT NULL,
  estilo_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artistas(artista_id),
  FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE = InnoDB;
