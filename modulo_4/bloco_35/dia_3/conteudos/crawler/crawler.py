# python3 -m venv .venv
# source .venv/bin/activate
# python -m pip install requests

import requests
import time

# 1- Requisições web
request = requests.get("https://www.google.com/")

print(request)
print(request.headers)
print(request.headers['Content-Type'])

# 2- Rate Limit
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)

# 3- Timeout
try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
