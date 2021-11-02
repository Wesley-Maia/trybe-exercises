CREATE DATABASE IF NOT EXISTS Biblioteca;

-- Criar tabela de Autor
CREATE TABLE Autor (
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

-- Criar tabela Categoria
CREATE TABLE Categoria (
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

-- Criar tabela Cliente
CREATE TABLE Cliente (
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

-- Criar tabela Livro
CREATE TABLE Livro (
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES Autor (autor_id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria (categoria_id)
);

-- Criar tabela Historico
CREATE TABLE Historico (
	livro_id INT NOT NULL,
    cliente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(livro_id, cliente_id),
    FOREIGN KEY (livro_id) REFERENCES Livro (livro_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente (cliente_id)
);

SELECT * FROM Historico INNER JOIN Cliente ON Cliente.cliente_id = Historico.cliente_id;

SELECT * FROM Categoria;
SELECT * FROM Livro;
SELECT * FROM Autor;
SELECT * FROM Cliente;
SELECT * FROM Historico;
