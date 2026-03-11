function apresentar(nome) {
  return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = (nome) => `meu nome é ${nome}`;
const soma = (num, num2) => num + num2;

console.log(apresentar("Paulo"));
console.log(apresentarArrow("Paulo"));

// Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "simente números de 1 a 9";
  } else {
    return num + num2;
  }
};

// Hoisting: arrow funtion se comporta como expressao
