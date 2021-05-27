const { ApolloServer, gql, PubSub, MockList } = require('apollo-server');

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

const mocks = {
	Query: () =>({
	  allPost: () => new MockList([0, 12]),
	}),
  };
//   const mocks = {
// 	Int: () => 6,
// 	Float: () => 22.1,
// 	String: () => 'Hello',
//   };


const server = new ApolloServer({
	typeDefs,
	resolvers,
	mocks,
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
