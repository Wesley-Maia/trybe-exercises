// =======================================================================================
// Array.find()

// 2- Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  if (name.split('').length === 5) {
    return name;
  }
}

console.log(names.find(findNameWithFiveLetters));


/* const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => {
    if(name.split('').length === 5) {
      return name;
    }
  });
}

console.log(findNameWithFiveLetters()); */
