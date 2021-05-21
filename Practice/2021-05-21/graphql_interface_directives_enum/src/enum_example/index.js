const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	enum AllowedColor {
		RED
		GREEN
		BLUE
	}
	type Query {
		favoriteColor: AllowedColor! # enum return value
		avatar(borderColor: AllowedColor!): String # enum argument
	}
`;

const resolvers = {
	AllowedColor: {
		RED: '#f00',
		GREEN: '#0f0',
		BLUE: '#00f',
	},
	Query: {
		favoriteColor: () => '#f00',
		avatar: (_, args) => {
			return args.borderColor;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
