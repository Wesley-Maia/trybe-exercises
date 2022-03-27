class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calculo_area(self):
        return ((self.raio ** 2) * self.PI)


circulo1 = Circulo(2)
print(circulo1.calculo_area())
