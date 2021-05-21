const { ApolloServer, gql, PubSub } = require('apollo-server');
const persons = require('./persons');

const typeDefs = gql`
	type Person {
		id: ID!
		name: String!
		age: Int!
		posts: [Post]
	}
	type Post {
		id: ID!
		title: String!
		author: Person!
	}
	input PersonInput {
		name: String!
		age: Int!
	}
	type Query {
		allPerson(last: Int): [Person!]!
		personById(id: Int!): Person
	}
	type Mutation {
		createPerson(input: PersonInput!): Person!
		updatePerson(id: Int!, name: String!, age: Int!): Person
		deletePerson(id: Int!): Person
		createPost(id: Int!, title: String!): Post!
		updatePost(id: Int!, title: String!): Post
		deletePost(id: Int!): Post
	}
	type Subscription {
		newPerson: Person!
		newPost: Post!
	}
`;

const NEW_PERSON = 'NEW_PERSON';
const NEW_POST = 'NEW_POST';
var personIndex = persons.length + 1;

const resolvers = {
	Subscription: {
		newPerson: {
			subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_PERSON),
		},
		newPost: {
			subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_POST),
		},
	},
	Query: {
		allPerson: () => persons,
		personById: (_, { id }) => {
			return persons.find((person) => person.id === id);
		},
	},
	Mutation: {
		createPerson: (_, { input: { name, age } }, { pubsub }) => {
			const user = {
				id: 'user_' + personIndex,
				name,
				age,
				posts: [],
			};
			pubsub.publish(NEW_PERSON, {
				newPerson: user,
			});
			persons.push(user);
			return user;
		},
		updatePerson: (_, { id, name, age }) => {
			const person = persons.find((p) => {
				if (p.id === id) {
					p.name = name;
					p.age = age;
					return p;
				}
			});
			return person;
		},
		deletePerson: (_, { id }) => {
			const index = persons.findIndex(function (p) {
				return p.id == id;
			});
			if (index == -1) {
				return null;
			}
			const person = persons[index];
			persons.splice(index, 1);
			return person;
		},
		createPost: (_, { id, title }) => {
			const person = persons.find((person) => person.id === id);
			const post = {
				id,
				title,
				author: person,
			};
			pubsub.publish(NEW_POST, {
				newPost: post,
			});
			person.posts.push(post);
			return post;
		},
		updatePost: (_, { id, title }) => {
			const person = persons.find((person) => person.id === id);
			const post = person.posts.find((post) => {
				if (post.id === id) {
					post.title = title;
					return post;
				}
			});
			return post;
		},
		deletePost: (_, { id }) => {
			const person = persons.find((person) => person.id === id);
			const postIndex = person.posts.findIndex((post) => post.id === id);
			const post = person.posts[postIndex];
			person.posts.splice(postIndex, 1);
			return post;
		},
	},
};

const pubsub = new PubSub();
const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res, pubsub }) });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
