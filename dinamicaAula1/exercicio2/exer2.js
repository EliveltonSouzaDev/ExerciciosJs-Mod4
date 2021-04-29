//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]S
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const fetch = require("node-fetch");

(async () => {
  try {
    const request = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    );
    const json = await request.json();
    const response = json.meals[0];

    const resultados = {
      Nome: response.strMeal,
      Id: response.idMeal,
      Regiao: response.strArea,
      Instrucoes: response.strInstructions,
      Ingredientes: `${response.strIngredient1}, ${response.strIngredient2}, ${response.strIngredient3}, ${response.strIngredient4}, ${response.strIngredient5}, ${response.strIngredient6}, ${response.strIngredient7}, ${response.strIngredient8}, ${response.strIngredient9},`,
    };
    
    console.log(resultados);

  } catch (error) {
    console.log(error.response.body);
  }
})();
