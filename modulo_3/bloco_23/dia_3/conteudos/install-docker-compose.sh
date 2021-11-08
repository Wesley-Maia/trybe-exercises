# Comando para realizar a instalação:
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Aplicar a permissão de execução ao binário:
sudo chmod +x /usr/local/bin/docker-compose

# Validar a instalação
docker-compose --version
