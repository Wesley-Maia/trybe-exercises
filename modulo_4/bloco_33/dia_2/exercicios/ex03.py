# ==================================================================================
#  33.2 Entrada e Saída de Dados

# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

max = 3


def read_file():
    with open("arquivo.txt") as file:
        lst_words = [word.strip() for word in file]

        print("Lista de palavras do arquivo: ", lst_words)
        return lst_words

# lst_words = ["cerveja", "refrigerante", "suco", "doce"]


def secret_word(words):
    word_selected = random.choice(words)
    # print("Palavra selecionada: ", word_selected)
    embaralha = "".join(random.sample(word_selected, len(word_selected)))
    # print("Palavra embaralhada: ", embaralha)
    return word_selected, embaralha


def collections_words():
    lst_options = []
    for index in range(max):
        option = input("Informe a palavra: ")
        lst_options.append(option)

    print("Lsita de palavras: ", lst_options)

    return lst_options


def check_result(secret, list):
    if secret in list:
        print(f"Você acertou: {secret}")
    else:
        print("Não foi dessa vez")


if __name__ == "__main__":
    print(read_file())
    word_selected, embaralha = secret_word(read_file())
    print(f"Tente advinhar a palavra: {embaralha}")
    lst_options = collections_words()
    check_result(word_selected, lst_options)  
