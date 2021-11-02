CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario(
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  sobrenome VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  telefone VARCHAR(11) NOT NULL,
  data_cadastro DATE NOT NULL
) ENGINE = InnoDB;

CREATE TABLE setor(
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  setor VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE funcionario_setor(
  funcionario_id INT NOT NULL,
  setor_id INT NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE = InnoDB;
