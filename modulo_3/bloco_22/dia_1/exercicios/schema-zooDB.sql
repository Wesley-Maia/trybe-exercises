CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE localizacao(
  local_id INT PRIMARY KEY AUTO_INCREMENT,
  nome_local VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE especie(
  especie_id INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE cuidador(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE = InnoDB;

CREATE TABLE animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  sexo CHAR(1) NOT NULL,
  especie_id INT NOT NULL,
  local_id INT NOT NULL,
  FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
  FOREIGN KEY (local_id) REFERENCES localizacao(local_id)
) ENGINE = InnoDB;

CREATE TABLE cuidador_animal(
  animal_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
) ENGINE = InnoDB;
