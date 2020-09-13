import axios from 'axios';

export class Recipe {
	constructor() {
		this.ApiURL = `https://api.edamam.com/`;
		this.AppId = '0db9fdb8';
		this.AppKey = 'f39b8d8019b52ecd7940a7a73b350d47';
	}

	IsDataEmpty(data) {
		if (data.length === 0) {
			return true;
		} else return false;
	}

	async GetAllByQueryAsync(query, from = 0, to = 10) {
		try {
			const request = await axios.get(
				`${this.ApiURL}search?q=${query}&app_id=${this.AppId}&app_key=${this.AppKey}&from=${from}&to=${to}`
			);
			this.RecipesList = request.data;
		} catch (error) {
			console.log(new Error(error));
		}
	}

	async GetByIdAsync(id) {
		try {
			const request = await axios.get(
				`${this.ApiURL}search?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_${id}&app_id=${this.AppId}&app_key=${this.AppKey}`
			);
			this.recipe = request.data;
		} catch (error) {
			console.log(error);
		}
	}
}
