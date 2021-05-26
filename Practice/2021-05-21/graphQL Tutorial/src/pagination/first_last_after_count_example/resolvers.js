const { UserInputError } = require('apollo-server');
const todos = require('./todos');

const resolvers = {
	Query: {
		allTodos: (_, { first, offset = 0 }) => {
			// return todos.slice(0, count);
			const totalCount = todos.length;
			const todosData = first === undefined ? todos.slice(offset) : todos.slice(offset, offset + first);
			const result = {
				todos: todosData,
				totalCount,
			};
			return result;
		},
		allTodosCursor: (_, { after, first }) => {
			if (first < 0) {
				throw new UserInputError('First must be positive');
			}
			const totalCount = todos.length;
			let todosData = [];
			let start = 0;
			if (after !== undefined) {
				// const buff = new Buffer(after,'base64');
				// const id = buff.toString('ascii');
				// console.log(id);

				id = Buffer.from(after, 'base64').toString('ascii');	//decoding

				const index = todos.findIndex((todo) => todo.id === id);	
				if (index === -1) {
					throw new UserInputError('After does not exist');
				}
				start = index + 1;
			}
			todosData = first === undefined ? todos : todos.slice(start, start + first);
			let endCursor;
			const edges = todosData.map((todo) => {
				cursor = Buffer.from(todo.id).toString('base64');		//encoding

				endCursor = cursor;
				return {
					cursor: endCursor,
					node: todo,
				};
			});
			const hasNextPage = start + first < totalCount;
			const pageInfo =
				endCursor !== undefined
					? {
							endCursor,
							hasNextPage,
					  }
					: {
							hasNextPage,
					  };
			const result = {
				edges,
				pageInfo,
				totalCount,
			};
			return result;
		},
	},
};

module.exports = resolvers