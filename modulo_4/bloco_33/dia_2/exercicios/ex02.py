# ==================================================================================
#  33.2 Entrada e Saída de Dados

# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada com as
# letras embaralhadas. O programa terá uma lista de palavras e escolherá
# uma aleatoriamente. O jogador terá três tentativas para adivinhar a
# palavra. Ao final a palavra deve ser mostrada na tela, informando se a
# pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método
# choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

import random

lst_words = ["cerveja", "refrigerante", "suco", "doce"]

max = 3


def secret_word(words):
    word_selected = random.choice(words)
    # print("Palavra selecionada: ", word_selected)
    embaralha = "".join(random.sample(word_selected, len(word_selected)))
    # print("Palavra embaralhada: ", embaralha)

    return word_selected, embaralha


# secret_word(lst_words)

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
    word_selected, embaralha = secret_word(lst_words)
    print(f"Tente advinhar a palavra: {embaralha}")
    lst_options = collections_words()
    check_result(word_selected, lst_options)
