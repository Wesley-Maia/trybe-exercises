# Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8 e
# exiba seu conteúdo de forma legível.

# python3 -m venv .venv && source .venv/bin/activate
# python3 -m pip install requests

import requests

response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)
