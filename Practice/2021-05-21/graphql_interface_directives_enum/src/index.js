const { ApolloServer,gql, PubSub } = require('apollo-server');
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');

const pubsub = new PubSub();

const typeDefs = gql`
	type Subscription {
		postCreated: Post
	}
	type Post {
		author: String
		comment: String
	}
	type Query {
		allPost: [Post]
	}
	type Mutation {
		createPost(author: String, comment: String): Post
	}
`;

const resolvers = {
	Query: {
		allPost: () => {
			return [
				{ author: 'a', comment: 'author is a' },
				{ author: 'b', comment: 'author is b' },
				{ author: 'c', comment: 'author is c' },
			];
		},
	},
	Mutation: {
		createPost(parent, args, { req, res }) {
			pubsub.publish('POST_CREATED', { postCreated: args });
			// req.session.userId = 'aedfgrejndserk';
			return args;
		},
	},
	Subscription: {
		postCreated: {
			// More on pubsub below
			subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
		},
	},
};
// const app = express();
// const server = new ApolloServer({
// 	subscriptions: {
// 		path: '/subscriptions',
// 		onConnect: (connectionParams, webSocket, context) => {
// 			console.log('Cliend Connected');
// 		},
// 		onDisconnect: (webSocket, context) => {
// 			console.log('Client disconnected');
// 		},
// 	},
// 	typeDefs,
// 	resolvers,
// 	context: ({ req, res }) => ({ req, res }),
// });

const server = new ApolloServer({
	typeDefs,
	resolvers,
});
//   await server.start();

//   server.applyMiddleware({ app });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
