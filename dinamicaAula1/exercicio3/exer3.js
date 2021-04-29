/*3. Faça fetch dos dados através da API 
(https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) 
e retorne uma lista(array) com os nomes dos primeiros 10 resultados.*/

const fetch = require('node-fetch');

(async () => {
  try {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const json = await response.json()
    const filter = json.meals
    const filteredMeals = filter.slice(0, 10).map(meal => meal.strMeal)
    console.log(filteredMeals);
  } catch (error) {
    console.log(error);
  }
})();