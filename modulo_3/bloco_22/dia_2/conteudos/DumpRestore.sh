#=======================================================================================================
# Dump e Restore via Terminal
#=======================================================================================================
#1- Acessar MySQL usando usuário root e password
mysql -u root -p

#2- Listar Banco de Dados
mysql> show databases;

#3- Selecionar um BD
mysql> use sakila;

#4- Visualizar tabelas
mysql>show tables;

#5- Visualizar o conteúdo de uma das tabelas
mysql>select * from actor;

#6- Sair da instância do MySQL
mysql>exit;

#7- Criar diretório de backup
mkdir backup

#8- Acessar o diretório
cd backup

#9- Acessar instância do MySQL para criar o dump com nome backupSakila
mysqldump -u root -p sakila > backupSakila.sql

#10- Criar apenas estrutura
mysqldump -u root -p --no-data sakila > backupSakila.sql

#11- Apagar BD
mysql -u root -p
mysql>drop database sakila;

#12- Criar BD
mysql -u root -p
mysql>create database sakila;
mysql>exit;

#13- Recuperar BD. Acessar o diretório com o backup
mysql -u root -p sakila < backupSakila.sql
