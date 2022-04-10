# Exercício 2 Faça uma requisição ao recurso usuários da API do Github 
# ( https://api.github.com/users ), exibindo o username e url de todos os 
# usuários retornados.

# python3 -m venv .venv && source .venv/bin/activate
# python3 -m pip install requests

import requests

response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"{user['login']} - {user['url']}")
