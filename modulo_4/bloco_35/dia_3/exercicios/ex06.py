# Exercício 6 Escreva um programa que se conecte ao banco de dados library
# e liste os livros da coleção books para uma determinada categoria recebida 
# or uma pessoa usuária. Somente o título dos livros deve ser exibido.

# python3 -m venv .venv && source .venv/bin/activate
# python3 -m pip install pymongo

# No terminal:
# mongoimport --db library books.json

from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
