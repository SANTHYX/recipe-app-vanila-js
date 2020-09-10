import '../sass/main.scss';
import '../img/hero.jpg';
import { RecipesList } from './components/Recipes-List.js';
import {
	searchBtn,
	previousResultsBtn,
	nextResultsBtn
} from './vendors/recipes-list-binds.js';

const recipesList = new RecipesList();

searchBtn.addEventListener('click', () => {
	recipesList.Clear();
	recipesList.DisplayDishesAsync();
});

previousResultsBtn.addEventListener('click', () => {
	recipesList.Clear();
	recipesList.DisplayPreviousPage();
});

nextResultsBtn.addEventListener('click', () => {
	recipesList.Clear();
	recipesList.DisplayNextPage();
});
