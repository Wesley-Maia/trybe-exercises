function randomDice(sides) {
    const random = Math.random();
    return Math.round(random * sides);
  }
  
  test('Testando se a função foi chamada.', () => {
    randomDice = jest.fn()
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(8)
      .mockReturnValueOnce(427);
  
    //const result = randomDice();
    expect(randomDice()).toBe(10);
    expect(randomDice).toHaveBeenCalled();  // só funciona para funções mockadas
    expect(randomDice).toHaveBeenCalledTimes(1);
  
    expect(randomDice()).toBe(8);
    expect(randomDice).toHaveBeenCalled();
    expect(randomDice).toHaveBeenCalledTimes(2);
  
    expect(randomDice()).toBe(427);
    expect(randomDice).toHaveBeenCalled();
    expect(randomDice).toHaveBeenCalledTimes(3);
  });
  