# ==================================================================================
#  33.1 Aprendendo Python
# Bonus

# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9,
# 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

lst_number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def small_number(lst):
    return min(lst)


print("Menor número da lista: ", small_number(lst_number))

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:


def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


draw_triangle(5)

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor
# esperado será 15 .


def sum_num(number):
    result = 0
    for num in range(1, number + 1):
        result += num

    return result


print("A soma é: ", sum_num(5))

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
        return price * liters * (1 - discount)
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
        return price * liters * (1 - discount)


print("O valor a pagar é: ", fuel_price("A", 25))
