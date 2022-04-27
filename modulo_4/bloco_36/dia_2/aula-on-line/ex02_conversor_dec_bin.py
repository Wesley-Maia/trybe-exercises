# Dado um número inteiro positivo decimal,
# converta sua base para binária, usando recursão

# 10 / 2 = 5 resto = 0
# 5 / 2 = 2 resto = 1
# 2 / 2 = 1 resto = 0
# 1 / 2 = 0 resto = 1

# 10d = 1010b


def convent_to_binary(n):
    result, rest = divmod(n, 2)

    if n > 1:
        convent_to_binary(result)

    # return rest
    print(rest, end="")


# print(convent_to_binary(10))
convent_to_binary(10)
