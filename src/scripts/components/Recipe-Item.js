export class RecipeItem {
	TrimLabel(object) {
		const splitLabel = object.recipe.label.split('');
		return object.recipe.label.length > 12
			? `${splitLabel.slice(0, 13).join('')}...`
			: object.recipe.label;
	}

	Render(list, object) {
		list.insertAdjacentHTML(
			'beforeend',
			`<li>
			<a href="#${object.recipe.uri.split('_')[1]}">
				<div class="recipes-list-item">
					<img src="${object.recipe.image}" alt="recipe.jpg" />
					<h3>${this.TrimLabel(object)}</h3>
				</div>
			</a>
		</li>`
		);
	}

}
