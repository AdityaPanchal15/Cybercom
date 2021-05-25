const { ApolloServer, gql } = require('apollo-server');
const User = require('./datasources/user');

const typeDefs = gql`
	type Query {
		login(email: String!, password: String!): Person!
		allPost: [Post!]!
	}
	type Person {
		token: String
	}
	type Post {
		author: String!
	}
`;

const resolvers = {
	Query: {
		login: (_, { email, password }, { user, req }) => {
			const res = user.login(email, password);
			console.log(req.headers);
			return res;
		},
		allPost: (_, __, context) => {
			if (context.req.headers.token && context.req.headers.token === 'QpwL5tke4Pnpja7X4') {
				return [{ author: 'a' }, { author: 'b' }, { author: 'c' }];
			}
			throw new Error('Login Required');
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		return {
			user: new User(),
			req,
		};
	},
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
