import { recipesList } from '../vendors/recipes-list-binds';

export class RecipeItem {
	TrimLabel(object) {
		const splitLabel = object.recipe.label.split('');
		return object.recipe.label.length > 12
			? `${splitLabel.slice(0, 13).join('')}...`
			: object.recipe.label;
	}

	render(object) {
		recipesList.insertAdjacentHTML(
			'beforeend',
			`<li>
			<a href="">
				<div class="recipes-list-item">
					<h3>${this.TrimLabel(object)}</h3>
					<img src="${object.recipe.image}" alt="xd" />
				</div>
			</a>
		</li>`
		);
	}
}
