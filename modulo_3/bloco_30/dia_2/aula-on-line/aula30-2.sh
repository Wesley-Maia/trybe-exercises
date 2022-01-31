# Aula 30.2 Deploy - Gerenciamento de Processos

#1- Instalação do PM2 de forma global
npm install pm2 -g

#2- Iniciando o PM2 pelo terminal
pm2 start index.js --watch --name name_of_process

#3- Apagar todos os processos
pm2 delete all

#4- Modo Fork: processo sendo excutado num único cluster

#5- Logs do PM2
pm2 logs

#6- Lista de aplicativos
pm2 list

#7- Reinicializar todos os processos
pm2 restart all

#8- Parando todos os processos
pm2 stop all

#9- Criando arquivo de configuração

ecosystem.config.yml

apps:
	- name: colorful-process
	  script: ./index.js
	  watch: true
	  exec_mode: cluster
      instances: max

# https://pm2.keymetrics.io/docs/usage/memory-limit/

#10- Executando arquivo ecosystem.config.yaml
pm2 start ecosystem.config.yml

