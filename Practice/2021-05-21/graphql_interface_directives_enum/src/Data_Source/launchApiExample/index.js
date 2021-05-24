const { ApolloServer, gql } = require('apollo-server');
const LaunchAPI = require('./datasources/launch');

const typeDefs = gql`
	type Query {
		allLaunches: [LaunchReducer]
		launchById(launchId: ID!): LaunchReducer
		launchesByIds(launchIds: [ID!]!): [LaunchReducer]
	}
	type LaunchReducer {
		id: ID!
		cursor: String
		site: String
		mission: Mission
		rocket: Rocket
		# isBooked: Boolean!
	}
	type Mission {
		name: String
		missionPatchSmall: String
		missionPatchLarge: String
	}
	type Rocket {
		id: ID!
		name: String
		type: String
	}
`;

const resolvers = {
	Query: {
		allLaunches: async (_, __, { dataSources }) => {
			return dataSources.launchAPI.getAllLaunches();
		},
		launchById: async (_, { launchId }, { dataSources }) => {
			return dataSources.launchAPI.getLaunchById(launchId);
		},
		launchesByIds: (_, { launchIds }, { dataSources }) => {
			return dataSources.launchAPI.getLaunchesByIds(launchIds);
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			launchAPI: new LaunchAPI(),
		};
	},
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
