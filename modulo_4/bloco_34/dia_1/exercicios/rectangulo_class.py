class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calculo_area(self):
        return self.base * self.altura


retangulo1 = Retangulo(2, 10)
print(retangulo1.calculo_area())
