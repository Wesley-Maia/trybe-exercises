// Função síncrona
function calcularDivisao(num1, num2){
  if(num2 == 0) throw new Error("Não pode ser feita uma divisão por zero");

  const resultado = num1/num2;

  return resultado;
}

try{
  const resultado = calcularDivisao(2,0);
  console.log(`Resultado: ${resultado}`);
} catch(e){
  console.log(`Erro: ${e.message}`);
}
