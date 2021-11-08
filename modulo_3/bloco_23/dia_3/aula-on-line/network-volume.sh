#=================================================================
# Container Docker
# 1-Criando o primeiro container
docker run -itd --name container1 busybox

# 2-Criando o segundo container
docker run -itd --name container busybox

# 3-Verificando os containers
docker ps -a

# 4-Conectar ao container1 de forma interativa
docker exec -it container1 /bin/sh

# 5-Abrir outra aba do terminal e conectar ao container2
docker exec -it container2 /bin/sh

#=================================================================
# Network Docker
# 6-Criando uma rede
docker network create -d bridge tryber-network

# 7-Verificando a rede
docker network ls

# 8-Conectando os containers à rede
docker network connect tryber-network container1

docker network connect tryber-network container2

# 9-No terminal do container1 (terminal interativo)
ping container2

# 10-Parar o ping
Ctrl + c

# 11-Verificando quais containers estão conectados à rede
docker network inspect tryber-network

# 12-Criar container e conectar na rede
docker run -itd --name container3 --network tryber-network busybox

# 13-Desconectar de uma rede
docker network disconnect tryber-connect container3

#=================================================================
# Volumes Docker - Parte 1
# 1- Criando o volume
docker run -v "tryber/vqv" ubuntu

# 2- Verificando o container
docker ps -a

# 3-Com o Container ID, verificar o Source (dentro de Mounts):
docker inspect <Container ID>

# 4-Utilizando pasta específica da máquina
docker run -it -v "/home/mariotto/Desktop/:/trybe/vqv" ubuntu

# 5-No terminal interativo, mudar para diretório "tryber/vqv"
cd tryber/vqv

# 6-Criar um arquivo dentro deste diretório
touch meu-arquivo.txt

# 7-Escrever algo nesse arquivo
echo "Vamo que vamo turma" > meu-arquivo.txt

#=================================================================
# Volumes Docker - Parte 2
# 1-Criar diretórios
mkdir meu-nginx && cd meu-nginx
mkdir public-html

# 2-Sincronizar diretório com container
docker run --name meu-app -p 8080:80 -v $(pwd)/public_html:/usr/share/nginx/html -d nginx

# 3- Dentro da pasta public_html, criar index.html:
touch index.html
