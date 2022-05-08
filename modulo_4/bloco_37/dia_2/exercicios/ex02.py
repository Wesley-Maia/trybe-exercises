# Exercício 2- Em um jogo de baralho, as cartas estão representadas
# por um array numérico. Para iniciar o jogo devemos embaralhar as
# cartas. Faremos isto dividindo uma porção de cartas em 2 e depois
# mesclando as duas porções. Por exemplo:

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def embaralha_cartas(list, n):
    new_list1 = []
    new_list2 = []
    result = []

    for index in range(n):
        new_list1.insert(index, list[index])
        new_list2.insert(index + n, list[index + n])

    for index in range(n):
        result.append(new_list1[index])
        result.append(new_list2[index])

    print(new_list1)
    print(new_list2)
    print(result)


cartas = [1, 4, 4, 7, 6, 6]
embaralha_cartas(cartas, 3)
