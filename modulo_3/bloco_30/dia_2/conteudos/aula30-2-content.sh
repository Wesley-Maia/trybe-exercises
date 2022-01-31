# Aula 30.2 Deploy - Gerenciamento de Processos

#1- Instalação do PM2 de forma global
npm install pm2 -g

#2- Criar aplicação com Express
npm init -y
npm i express

# Criar arquivo
index.js

#Modificar package.json
"start": "node index.js"

#3- Verificar versão do PM2
pm2 --version

#4- Iniciando o PM2 pelo terminal
pm2 start index.js --name hello-pm2

#5- Parar um processo pelo id
pm2 stop 0

#6- Parar um processo pelo name
pm2 stop hello-pm2

#7- Listar os processos
pm2 list

#8- Apagar um processo pelo name
pm2 delete hello-pm2

#9- O comando restart para a aplicação e reinicia a mesma

#10- O comando reload faz uma cópia e inicia o processo.
# Quando o PM2 perceber que a cópia está pronta, ele mata
# a aplicação original, sem nenhum prejuízo.

#11- Monitorar processos
pm2 monit

#12- Apresentar maiores informações de um processo pelo id
pm2 show 1
