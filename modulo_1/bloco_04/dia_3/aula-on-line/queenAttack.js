// =======================================================================================
// Queen Attack

let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 2;
let colunaOponente = 9;

let ataqueBemSucedido = false;

if((linhaRainha === linhaOponente) || (colunaRainha === colunaOponente)){
  ataqueBemSucedido = true;
}

// Verifica a diagonal superior direita
for(let iSupDir = 1; iSupDir < 8; iSupDir += 1){
  let linhaAtualRainha = linhaRainha + iSupDir;
  let colunaAtualRainha = colunaRainha + iSupDir;

  if((linhaAtualRainha > 8) || (colunaAtualRainha > 8)){
    break;
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)){
    ataqueBemSucedido = true;
  }
}

// Verifica a diagonal superior esquerda
for(let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1){
  let linhaAtualRainha = linhaRainha + iSupEsq;
  let colunaAtualRainha = colunaRainha - iSupEsq;

  if((linhaAtualRainha > 8) || (colunaAtualRainha < 1)){
    break;
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)){
    ataqueBemSucedido = true;
  }
}

// Verifica a diagonal inferior esquerda
for(let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1){
  let linhaAtualRainha = linhaRainha - iInfEsq;
  let colunaAtualRainha = colunaRainha - iInfEsq;

  if((linhaAtualRainha < 1) || (colunaAtualRainha < 1)){
    break;
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)){
    ataqueBemSucedido = true;
  }
}

// Verifica a diagonal inferior direita
for(let iInfDir = 1; iInfDir < 8; iInfDir += 1){
  let linhaAtualRainha = linhaRainha - iInfDir;
  let colunaAtualRainha = colunaRainha + iInfDir;

  if((linhaAtualRainha < 1) || (colunaAtualRainha > 8)){
    break;
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)){
    ataqueBemSucedido = true;
  }
}

console.log("Ataque bem sucedido?", ataqueBemSucedido);
