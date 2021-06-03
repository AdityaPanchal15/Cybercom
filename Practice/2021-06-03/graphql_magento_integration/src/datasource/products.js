const { RESTDataSource } = require('apollo-datasource-rest');
const { default: axios } = require('axios');

class Products extends RESTDataSource {
	constructor() {
		super();
	}

	async ProductAPI() {
		return axios
			.get(`http://192.168.0.60/aditya/api/rest/products`, {
				headers: {
					'content-type': 'application/json',
				},
			})
			.then((res) => {
				let productsArray = [];
				for (const [key, value] of Object.entries(res.data)) {
					console.log(`${key}: ${value}`);
					productsArray.push(value);
				}
				console.log(productsArray);
				return productsArray;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

module.exports = Products;
