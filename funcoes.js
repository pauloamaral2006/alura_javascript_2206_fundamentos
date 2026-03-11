let x = "";
console.log(x);
x = "oi";

//1) declara a função
function imprimeTexto(texto) {
  console.log(texto);
}

//2) executa a funcao (1 ou + vezes)
imprimeTexto("oi");
imprimeTexto("outro texto");
imprimeTexto(soma());

// três formas de escrever funçõoes

function soma() {
  //outros códigos
  // vários console.log()
  return 2 + 2;
}

console.log(soma());
