// =======================================================================================
// JavaScript - Objetos

let student = {
  name: "Jackson",   /// entrada (chave: valor) -- Propriedade do Objeto
  age: 41,
  hardSkills: 8,
  softSkills: 7,
  careerSkills: 7,
  nick: ['jack', 'tio jack', 'jj'],
  address: {
    street: 'Rua tal',
    number: '1234'
  }
};

// student.name (dot notation / notação de ponto)
console.log(student.name, student.age);
student.name = "Jose"; // Atualização / Update - Pois já existe a chave
student.city = "Aracaju";  // Adicionando / Criando uma nova chave: valor / Entrada

for (let key in student) {
  console.log("Chave", key, "Valor", student[key]);   // Usando parâmetros
  console.log("Chave " + key + " Valor " + student[key]);  // Usando concatenação de Strings
  console.log(`Chave ${key} Valor ${student[key]}`);  // Usando Template Literals
}

  //delete student.name
