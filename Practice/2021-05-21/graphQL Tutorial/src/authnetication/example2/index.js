const { ApolloServer, gql } = require('apollo-server');
const { PubSub } = require('apollo-server');
const post = require('./post');

const pubsub = new PubSub();

const typeDefs = gql`
	type Subscription {
		postAdded: Post
	}
	type Query {
		posts: [Post]
	}
	type Mutation {
		addPost(author: String, comment: String): Post
	}
	type Post {
		author: String
		comment: String
	}
`;

const resolvers = {
	Subscription: {
		postAdded: {
			// Additional event labels can be passed to asyncIterator creation
			subscribe: () => pubsub.asyncIterator(['POST_ADDED']),
		},
	},
	Query: {
		posts(root, args, context) {
			return post;
		},
	},
	Mutation: {
		addPost(root, args, context) {
			pubsub.publish('POST_ADDED', { postAdded: args });
			post.push(args);
			return args;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req, connection }) => {
		if (connection) {
			// check connection for metadata
			return {};
		} else {
			// check from req
			const token = req.headers.authorization || '';

			return { token };
		}
	},
	subscriptions: {
		onConnect: (connectionParams) => {
			if (connectionParams.authToken) {
				return true
			}

			throw new Error('Missing auth token!');
		},
	},
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
