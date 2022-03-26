# ==================================================================================
#  33.2 Aprendendo Python

# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A
# nota miníma para aprovação é 6.

lst_alunos_recupera = []

with open("arquivo.txt") as lst_alunos:
    for item in lst_alunos:
        aluno = item
        aluno = aluno.split(" ")
        if int(aluno[1]) < 6:
            lst_alunos_recupera.append(aluno[0] + "\n")

with open("listaAlunosRecupera", mode="w") as recuperaFile:
    print(lst_alunos_recupera)
    recuperaFile.writelines(lst_alunos_recupera)
