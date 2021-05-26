const { ApolloServer, gql } = require('apollo-server');
// const messages = require('./messages');
const channels = require('./channels');

const typeDefs = gql`
	type Channel {
		id: ID!
		name: String
		messages: [Message]
		messageFeed(cursor: String): MessageFeed
	}
	input MessageInput {
		channelId: ID!
		text: String
	}
	type Message {
		id: ID!
		text: String
		createdAt: Int
	}
	type MessageFeed {
		# cursor specifies the place in the list where we left off
		cursor: String!

		# this is a chunk of messages to be returned
		messages: [Message]!
	}
	type Query {
		channels: [Channel]
		channel(id: ID!): Channel
	}
`;

function getChannel(id) {
	return channels.find((channel) => channel.id === id);
}

const resolvers = {
	Query: {
		channels: () => {
			return channels;
		},
		channel: (root, { id }) => {
			return getChannel(id);
		},
	}, // The new resolvers are under the Channel type
	Channel: {
		// messages:(channel)=> {
		// 	return message.filter((message) => message.id === channel.id);
		// },
		messageFeed: (channel, { cursor }) => {
			// The cursor passed in by the client will be an
			// integer timestamp. If no cursor is passed in,
			// set the cursor equal to the time at which the
			// last message in the channel was created.

			if (!cursor) {
				cursor = channel.messages[channel.messages.length - 1].createdAt;
			}
			cursor = parseInt(cursor); // limit is the number of messages we will return.

			// We could pass it in as an argument but in this
			// case let's use a static value.
			const limit = 1;
			const newestMessageIndex = channel.messages.findIndex((message) => message.createdAt === cursor); // find index of message created at time held in cursor      // We need to return a new cursor to the client so that it
			console.log(newestMessageIndex);
			// can find the next page. Let's set newCursor to the
			// createdAt time of the last message in this messageFeed:
			const newCursor = channel.messages[newestMessageIndex - limit].createdAt;

			const messageFeed = {
				messages: channel.messages.slice(newestMessageIndex - limit, newestMessageIndex),
				cursor: newCursor,
			};
			console.log(messageFeed);

			return newestMessageIndex > 0 ? messageFeed : null;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
