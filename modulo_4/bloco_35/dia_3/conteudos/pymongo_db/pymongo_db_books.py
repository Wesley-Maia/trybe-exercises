# python3 -m venv .venv && source .venv/bin/activate
# python3 -m pip install pymongo
# sudo service mongod start

from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()

# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir

# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)

# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "A"}}):
    print(book["title"])

# fecha a conexão com o banco de dados
client.close()
