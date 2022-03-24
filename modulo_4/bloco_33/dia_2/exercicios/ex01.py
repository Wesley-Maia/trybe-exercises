# ==================================================================================
#  33.2 Entrada e Saída de Dados

# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida.

def name_art():
    name = input("Informe um nome: ")
    n = len(name)
    for letter in range(n):
        print(name[0:(n - letter)])


name_art()
