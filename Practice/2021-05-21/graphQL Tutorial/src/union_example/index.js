const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String!
	}
	interface MutationResponse {
		code: String!
		success: Boolean!
		message: String!
	}
	type UpdateUserEmailMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		user: User!
	}
	type Query {
		updatedUserResponse: UpdateUserEmailMutationResponse!
	}
	type Mutation {
		# This mutation takes id and email parameters and responds with a User
		updateUserEmail(id: ID!, email: String!): UpdateUserEmailMutationResponse!
	}
`;

const resolvers = {
	Query: {
		updatedUserResponse: () => {
			return {
				code: '200',
				success: 1,
				message: 'User email was successfully updated',
				user: { id: '1', email: 'a@gmail.com', name: 'joe doe' },
			};
		},
	},
	MutationResponse: {
		__resolveType: () => {
			return null;
		},
	},
	Mutation: {
		updateUserEmail: (_, { id, email }) => {
			const response = {
				code: '200',
				success: 1,
				message: 'User email was successfully updated',
				user: { id, email,name: 'joe doe' },
			};
			return  response ;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
