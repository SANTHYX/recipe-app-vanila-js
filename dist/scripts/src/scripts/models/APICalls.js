import axios from 'axios';

export class APICalls {
	constructor() {
		this.ApiURL = `https://api.edamam.com/`;
		this.AppId = '0db9fdb8';
		this.AppKey = 'f39b8d8019b52ecd7940a7a73b350d47';
	}

	IsDataEmpty() {
		if (this.data.length === 0) {
			return true;
		} else return false;
	}

	async GetByQueryAsync(query, from = 0, to = 10) {
		try {
			const request = await axios.get(
				`${this.ApiURL}search?q=${query}&app_id=${this.AppId}&app_key=${this.AppKey}&from=${from}&to=${to}`
			);
			this.data = request.data;
		} catch (error) {
			console.log(new Error(error));
		}
	}
}
