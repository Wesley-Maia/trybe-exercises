# ==================================================================================
#  33.1 Aprendendo Python

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def maior_num(x, y):
    if x > y:
        return x
    return y


print("Numero: ", maior_num(6, 5))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
lista = [4, 3, 2, 7]


def med_lst(lst):
    result = 0
    for num in lst:
        result += num
    return result / len(lst)


print("Média: ", med_lst(lista))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por
# exemplo:


def draw_n(n):
    for index in range(n):
        print(n * "*")


draw_n(5)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda".

list_name = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def size_name(lst):
    size_ref = lst[0]
    for name in lst:
        if len(name) > len(size_ref):
            size_ref = name
        print(len(name))

    return size_ref


print("Maior nome é: ", size_name(list_name))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede (em m²).


def cal_tinta(m2):
    l_price = 80
    l_tinta = m2 / 3
    print("Litros de tinta: ", l_tinta)

    if l_tinta < 18:
        print("É necessário uma lata de 18L")
    else:
        result = l_tinta // 18
        result += 1
        print("São necessárias: ", result, " latas de 18L")

    return result, result * l_price


print(cal_tinta(60))

# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo" , caso não
# seja possível formar um triângulo.


def define_type_triang(a, b, c):
    if a == b == c:
        return "equilátero"
    elif a == b or a == c or b == c:
        return "isósceles"
    else:
        return "escaleno"


print(define_type_triang(4, 4, 3))
