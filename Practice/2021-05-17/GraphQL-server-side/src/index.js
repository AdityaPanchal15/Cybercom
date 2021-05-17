const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		hello: String!
		user: User
	}
	type User {
		id: ID!
		username: String!
		firstLatterOfUsername: String
	}
	type Error {
		field: String!
		message: String!
	}
	type RegisterResponse {
		errors: [Error]
		user: User
	}
	input UserInfo {
		username: String!
		password: String!
		age: Int
	}
	type Mutation {
		register(userInfo: UserInfo!): RegisterResponse!
		login(userInfo: UserInfo!): String!
	}
`;

const resolvers = {
	User: {
		firstLatterOfUsername: (parent) => {
			return parent.username[0];
		},
		// username: parent => {return parent.username},
	},
	Query: {
		hello: () => 3,
		user: () => ({
			id: 1,
			username: 'abcd',
		}),
	},
	Mutation: {
		login: async (parent, { userInfo: { username } }, context) => {
			//check the password
			return username;
		},
		register: () => ({
			errors: [
				{
					field: 'username',
					message: 'bad',
				},
				{
					field: 'username2',
					message: 'bad2',
				},
			],
			user: {
				id: 1,
				username: 'Adi',
			},
		}),
	},
};

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
