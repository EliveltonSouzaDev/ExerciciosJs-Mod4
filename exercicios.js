//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => {return name.toUpperCase()};

const myFunction = (p1, p2) => {return p1 * p2} 

const toCelsius = (fahrenheit) => {return (5 / 9) * (fahrenheit - 32);
}

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

function handleMouseMove(event) {
  const [clientX, clientY] = event;
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj;

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

const {
  name: companyName,
  products: {
    shirts: { colors },
  },
} = company;

console.log(companyName); 
console.log(colors); 

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};

const newClothes = {...clothes}

//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
const moreClothes = {
  ...clothes,
  shoes: { colors: ['yellow', 'purple'] },
}
//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
const duplicados = numbers.map(x => Math.sqrt(x));

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
const duplicados = numbers.map(x => x * 10);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
const age = ages.filter(age =>(age >= 18)) // inline

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];

const dog = data.filter(tipo => tipo.type === 'dog');

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
const total = dog.reduce((acumulado, x) => acumulado + x.age, 0);

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = function(company) {
  colors = company.products.shirts.colors;
  return colors.length;
};

var getShirtsColorsAmount = (company) => {
const  {products:{shirts: {colors:allColors}}} = company;
return allColors;
};

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
const {pants,...rest} = clothes;
const otherClothes = rest

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const [um,...restoArr1] = arr;
const resto1 = restoArr1

const arr2 = [4, 5, 6];
const [quatro,...restoArr2] = arr2;
const resto2 = restoArr2

const total = [...resto1, ...resto2];

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

let nomeCompleto = persons.map((name)=>{
  return name.firstname + ' ' + name.lastname;
})