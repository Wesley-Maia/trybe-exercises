// ==================================================================
// Parte 1
function main(){
  console.log("Início da função main");

  // Função assíncrona
  setTimeout(()=>{
    console.log("O tempo passou");
  }, 3000);

  console.log("Fim da função main");
}

main();
// Resultado:
// 1- Início da função main
// 2- Fim da função main
// 3- O tempo passou

// ==================================================================
// Parte 2
const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("O tempo passou.");
      resolve(); // É preciso resolver ou rejeitar a promise.
    }, 3000);
  })
}

async function main(){
  console.log("Início da função main");

  // Função assíncrona
  await setTimeoutPromise();

  console.log("Fim da função main");
}

main();
