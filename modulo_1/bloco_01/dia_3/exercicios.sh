#=======================================================================================================
# Bloco 1 - Unix & Bash
#=======================================================================================================
# Parte I - Criação de arquivos e diretórios

#1- Crie um diretório chamado unix_tests
mkdir unix_tests

#2- Crie um arquivo de texto com o nome trybe.txt
touch trybe.txt

#3- Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt
cp trybe.txt trybe_backup.txt

#4- Renomeie o arquivo trybe.txt 
mv trybe.txt trybe2.txt

#5- Dentro de unix_tests , crie um novo diretório chamado backup 
mkdir backup

#6- Mova o arquivo trybe_backup.txt para o diretório backup 
mv trybe_backup.txt backup

#7- Dentro de unix_tests , crie um novo diretório chamado backup2 
mkdir backup2

#8- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 
mv backup/trybe_backup.txt backup2

#9- Apague a pasta backup 
rm -rf backup

#10- Renomeie a pasta backup2 para backup 
mv backup2 backup

#11- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
pwd
ls -la

#12- Apague o diretório backup
rm -rf backup

#13- Limpe o terminal
clear

#=======================================================================================================
#criar o arquivo skills.txt 

#14- Mostre na tela as 5 primeiras skills do arquivo skills.txt 
head -n 5 skills.txt 

#15- Mostre na tela as 4 últimas skills do arquivo skills.txt 
tail -n 4 skills.txt

#16- Apague todos os arquivos que terminem em .txt 
rm *.txt

#=======================================================================================================
#Parte II - Manipulação & Busca

#1- Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#2- Mostre todo o conteúdo do arquivo countries.txt na tela.
cat countries.txt

#3- Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
less countries.txt
# Para sair, digite 'q'

#4- Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia 
less countries.txt
/Zambia
<Enter>

#5- Busque por Brazil no countries.txt .
grep Brazil countries.txt

#=======================================================================================================