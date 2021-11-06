# Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!
# 1-No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;
debian

# 2-Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;
stable-slim

# 3-Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
docker pull debian:stable-slim

# 4-Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;
docker container run -ti debian:stable-slim

# 5-No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;
cat /etc/*-release

# 6-Encerre o terminal ;
exit

# 7-Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
docker container ls -a

# 8-Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
docker container start compassionate_morse

# 9-Retome o container que foi criado anteriormente nesse exercício ;
docker container attach compassionate_morse

# 10-Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;
cat /etc/debian_version

# 11-Encerre o terminal ;
exit

# 12-Remova somente o container criado para esse exercício ;
docker container rm compassionate_morse

# 13-(Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;
docker run -it --rm andrius/ascii-patrol

# 14-(Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
