import '../sass/main.scss';
import '../img/hero.jpg';
import { RecipesList } from './components/Recipes-List.js';
import { RecipesListBinds as Binds } from './vendors/recipes-list-binds.js';

const {
	searchBtn,
	searchField,
	list,
	//item,
	previousResultsBtn,
	nextResultsBtn,
	pageNumberLabel
} = Binds;
const recipesList = new RecipesList();

searchBtn.addEventListener('click', (event) => {
	event.preventDefault();
	recipesList.Clear(list);
	recipesList.DisplayDishesAsync(list, searchField.value);
});

previousResultsBtn.addEventListener('click', () => {
	if (parseInt(pageNumberLabel.textContent) > 1) {
		recipesList.Clear(list);
		recipesList.DisplayPreviousPage(list, searchField.value, pageNumberLabel);
	} else return;
});

nextResultsBtn.addEventListener('click', () => {
	if (parseInt(pageNumberLabel.textContent) <= 10) {
		recipesList.Clear(list);
		recipesList.DisplayNextPage(list, searchField.value, pageNumberLabel);
	} else return;
});

list.addEventListener('click', (e) => {
	const id = e.target.closest('a').hash.slice(1);
	recipesList.DisplayRecipeAsync(id);
});
