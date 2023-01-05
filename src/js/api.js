const apiURL = 'https://thecocktaildb.com/api/json/v1/1'


export async function getData(){
	const response = await fetch(`${apiURL}/search.php?f=a`);
	const cocktail = await response.json()
	drinksData = cocktail.drinks
}
getData()








