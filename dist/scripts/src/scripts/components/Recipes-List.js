import {
	recipesList as list,
	searchField,
	pageNumberLabel
} from '../vendors/recipes-list-binds';
import { APICalls } from '../models/APICalls';
import { RecipeItem } from '../components/Recipe-Item';

const apiCalls = new APICalls();
const recipeItem = new RecipeItem();

export class RecipesList {
	constructor() {
		this.FromIndex = 0;
		this.ToIndex = 10;
	}
	Clear() {
		if (list.childElementCount != 0) {
			list.innerHTML = '';
		} else return;
	}

	async DisplayDishesAsync() {
		this.query = searchField.value;
		try {
			await apiCalls.GetByQueryAsync(this.query, this.FromIndex, this.ToIndex);
			this.count = apiCalls.data.count;
			if (!apiCalls.IsDataEmpty()) {
				apiCalls.data.hits.forEach((element) => {
					recipeItem.render(element);
				});
			} else recipeItem.render('No Results');
		} catch (error) {
			console.log(error);
		}
	}

	DisplayNextPage() {
		if (parseInt(pageNumberLabel.textContent) !== 10) {
			this.FromIndex = this.ToIndex;
			this.ToIndex += 5;
			this.DisplayDishesAsync(this.query, this.FromIndex, this.ToIndex);
			pageNumberLabel.textContent = parseInt(pageNumberLabel.textContent) + 1;
		} else return;
	}

	DisplayPreviousPage() {
		if (parseInt(pageNumberLabel.textContent) !== 1) {
			this.ToIndex = this.FromIndex;
			this.FromIndex -= 5;
			this.DisplayDishesAsync(this.query, this.FromIndex, this.ToIndex);
			pageNumberLabel.textContent = parseInt(pageNumberLabel.textContent) - 1;
		} else return;
	}
}
