# 1- Rodar a imagem do Ubuntu em um container
docker container run ubuntu

# 2- Listar containers ativos
docker container ls

# 3- Listar containers ativos/inativos
docker container ls -a

# 4- Rodar comando adicional antes de terminar o container
docker container run ubuntu echo 'Hello Tryber'

# 5- Rodar o container de forma interativa
docker container run -ti ubuntu

# 6- Retornar dados da distribuição
cat /etc/lsb-release

# 7- Sair do terminal interno do container
exit

# 8- Definir um nome para o container
docker container run --name pinguim ubuntu

# 9- Rodar container em segundo plano
docker container run -d ubuntu

#10- Verificar processos em segundo plano
docker ps -a

#11- Criar um container sem executá-lo
docker container create --name ppl ubuntu

#12- Iniciar um container
docker container start ppl

#13- Retomar o acesso a um container interativo rodando em segundo plano 
docker container attach xenodochial_hertz

#14- Excluir container específico
docker container rm xenodochial_hertz

#15- Limpar containers inativos
docker container prune
