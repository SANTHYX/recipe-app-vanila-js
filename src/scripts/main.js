import '../sass/main.scss';
import '../img/hero.jpg';
import { RecipesList } from './components/Recipes-List.js';
import { searchBtn } from './vendors/recipes-list-binds.js';

const recipesList = new RecipesList();

searchBtn.addEventListener('click', () => {
	recipesList.Clear();
	recipesList.DisplayDishesAsync();
});
