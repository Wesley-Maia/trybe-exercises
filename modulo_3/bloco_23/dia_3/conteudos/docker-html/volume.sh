# Consultando as redes do Docker
docker run -d --name site-trybe2 -p 8881:80 -v "/home/wesley/trybe/trybe-exercises/modulo_3/bloco_23/dia_3/conteudos/docker-html/:/usr/local/apache2/htdocs/" httpd:2.4

# Acessando site pelo servidor Apache
http://localhost:8881/index.html

# Verificando o Mount
docker inspect site-trybe2

# Parando a execução do container
docker container stop site-trybe2

# Excluíndo o container
docker container rm site-trybe2