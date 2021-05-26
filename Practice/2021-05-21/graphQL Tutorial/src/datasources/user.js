const { RESTDataSource } = require('apollo-datasource-rest');
const { AuthenticationError } = require('apollo-server');

class User extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://reqres.in/api/';
		this.initialize({});
	}

	async login(email, password) {
		return await this.post(`login`, {
			email,
			password,
		})
        .then((res) => {
            return res;
        })
        .catch(() => {
            throw new AuthenticationError('permission denied');
        });
	}
}

module.exports = User;
