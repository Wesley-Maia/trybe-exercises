class carro:
    velocidade = 0
    ligado = False
    cor = ""
    consumo = ""


opala = carro()
opala.velocidade = 220
opala.ligado = True
opala.cor = "verde"
opala.consumo = "Alto"

print("Velocidade do carro: " + str(opala.velocidade))
print("Cor do carro: " + opala.cor)

estado = "sim" if opala.ligado else "não"
print("Ligado: " + str(opala.ligado))
print(estado)
