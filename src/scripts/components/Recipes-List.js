import { Recipe } from '../models/Recipe';
import { RecipeItem } from '../components/Recipe-Item';

const recipe = new Recipe();
const recipeItem = new RecipeItem();

export class RecipesList {
	constructor() {
		this.FromIndex = 0;
		this.ToIndex = 10;
	}
	Clear(list) {
		if (list.childElementCount != 0) {
			list.innerHTML = '';
		} else return;
	}

	async DisplayDishesAsync(list, query) {
		try {
			await recipe.GetAllByQueryAsync(query, this.FromIndex, this.ToIndex);
			if (!recipe.IsDataEmpty(recipe.RecipesList)) {
				recipe.RecipesList.hits.forEach((element) => {
					recipeItem.Render(list, element);
				});
			} else recipeItem.Render('No Results');
		} catch (error) {
			console.log(new Error(error));
		}
	}

	async DisplayRecipeAsync(id) {
		try {
			await recipe.GetByIdAsync(id);
			if (!recipe.IsDataEmpty(recipe.recipe)) {
				console.log(recipe.recipe);
			}
		} catch (error) {
			console.log(new Error(error));
		}
	}

	DisplayNextPage(list, query, pageLabel) {
		this.FromIndex = this.ToIndex;
		this.ToIndex += 10;
		this.DisplayDishesAsync(list, query);
		pageLabel.textContent = parseInt(pageLabel.textContent) + 1;
	}

	DisplayPreviousPage(list, query, pageLabel) {
		this.ToIndex = this.FromIndex;
		this.FromIndex -= 10;
		this.DisplayDishesAsync(list, query);
		pageLabel.textContent = parseInt(pageLabel.textContent) - 1;
	}
}
