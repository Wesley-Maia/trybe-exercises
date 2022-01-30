# Aula 30.1 Deploy - Deploy com Heroku

#1- Criar um app
npx create-react-app first-deploy-heroku

#2- Iniciando o Git
git init

git add .

git commit -m 'Initialize project using create Reatc App'

git remote -v

git remote add origin git@github...

#3- Heroku
heroku create first-deploy-heroku-2022

git remote rename heroku heroku-origin

#4- Deploy
git push heroku-origin master

#5- Criar um novo remote/App
heroku create --remote heroku-prod

#6- Criando variável de ambiente
heroku config:set SERVER_ENV=production --app heroku-prod

#7- Novo app utilizando o buildpack mars/create-react-app
heroku create heroku-prod --buildpack mars/create-react-app

#https://github.com/mars/create-react-app-buildpack#quick-start
