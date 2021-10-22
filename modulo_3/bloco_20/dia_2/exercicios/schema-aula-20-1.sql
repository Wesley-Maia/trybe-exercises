-- Criar um BD
create database cadastro;

-- Criar tabala
use cadastro;
create table Filme (
FilmeId int not null auto_increment,
Descricao varchar(100) not null,
AnoLancamento int not null,
Nota int,
primary key(FilmeId)
);

describe Filme;