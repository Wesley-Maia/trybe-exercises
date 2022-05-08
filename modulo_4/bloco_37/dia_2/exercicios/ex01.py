# Exercício 1- Em um software monitor, que verifica a resiliência de
# outro software, precisamos saber qual o tempo máximo que um
# software permaneceu sem instabilidades. Para isto, a cada hora é
# feito uma requisição ao sistema e verificamos se está ok. Supondo
# um array que contenha os estados coletados por nosso software,
# alcule quanto tempo máximo que o servidor permaneceu sem
# instabilidades.


#  1- OK
#  0- Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def verifica_estabilidade(state_values):
    max = 0
    time = 0
    for state in state_values:
        if state == 1:
            time += 1
        else:
            time = 0

        if time > max:
            max = time

    return max


valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]

print(verifica_estabilidade(valores_coletados))
