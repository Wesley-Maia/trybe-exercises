// =======================================================================================
/* 3- Agora inverta o lado do triângulo. */

let n = 5;
let t = 1;
let ast = '';

for(let i=0; i<n; i+=1){
  for(let i=0; i<n-t; i+=1){
    ast += "-";
  }
  for(let i=0; i<t; i+=1){
    ast += "*";
  }

  t +=1;
  console.log(ast);
  ast = '';
}
