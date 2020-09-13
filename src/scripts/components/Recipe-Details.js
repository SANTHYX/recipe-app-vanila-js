export class RecipeDetails {
	Clear(wraper) {
		wraper.innerHTML = '';
	}

	RenderIngedients(object) {
		const ingredientsList = document.getElementById('ingredients-list');
		object[0].ingredients.forEach((element) => {
			ingredientsList.insertAdjacentHTML(
				'beforeend',
				`<li>
            ${element.text} ${element.weight.toFixed(2)}g
            </li>`
			);
		});
	}

	Render(wraper, object) {
		wraper.insertAdjacentHTML(
			'beforeend',
			`<div id="recipe-info">
            <img src="${object[0].image}" alt="image.jpg" />
            <h4>Tags</h4>
            <h4>TotalTime:</h4>
            <p>${(object[0].totalTime / 60).toFixed(2)}h</p>
            <h4>TotalWeight:</h4>
            <p>${object[0].totalWeight.toFixed(2)}g</p>
            <h4>Calories:</h4>
            <p>${Math.round(object[0].calories)}kcal</p>
        </div>
        <div class="text-wraper">
            <h3>${object[0].label}</h3>
            <h4>Ingredients</h4>
            <ul id="ingredients-list">
            </ul>
        </div>`
		);
	}
}
