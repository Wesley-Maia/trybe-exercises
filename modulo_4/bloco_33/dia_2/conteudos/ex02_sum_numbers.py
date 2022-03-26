# ==================================================================================
#  33.2 Aprendendo Python

# Exercício 2: Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo
# uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte
# formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você
# deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit , embutido no tipo
# str, pode ser utilizado para verificar se a string corresponde a um número
# natural.

list_numbers = input("Digite um numero: ")

numArray = list_numbers.split(" ")

sum = 0

for num in numArray:
    if not num.isdigit():
        print(f"{num} não é um valor válido")
    else:
        sum += int(num)

print("O resultado da soma é: ", sum)
