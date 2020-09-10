import {
	recipesList as list,
	searchField
} from '../vendors/recipes-list-binds';
import { APICalls } from '../models/APICalls';
import { RecipeItem } from '../components/Recipe-Item';

const apiCalls = new APICalls();
const recipeItem = new RecipeItem();

export class RecipesList {
	Clear() {
		if (list.childElementCount != 0) {
			list.innerHTML = '';
		} else return;
	}

	async DisplayDishesAsync() {
		this.query = searchField.value;
		try {
			await apiCalls.GetByQueryAsync(this.query);
			if (!apiCalls.IsDataEmpty()) {
				apiCalls.data.forEach((element) => {
					recipeItem.render(element);
				});
			} else recipeItem.render('No Results');
		} catch (error) {
			console.log(error);
		}
	}

	DisplayPagination() {}
}
