const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	interface Book {
		title: String
		author: Author
	}
	type Author {
		name: String
	}
	type Textbook implements Book {
		title: String # Must be present
		author: Author # Must be present
		courses: [Course]
	}
	type ColoringBook implements Book {
		title: String
		author: Author
		colors: [Color]
	}
	type Course {
		name: String
	}
	type Color {
		name: String
	}
	type Query {
		# search(contains: String): [Result]
		schoolBooks: [Book]
	}
`;

const resolvers = {
	Book: {
		__resolveType(book, context, info) {
			if (book.courses) {
				return 'Textbook';
			}
			if (book.colors) {
				return 'ColoringBook';
			}
			return null; // GraphQLError is thrown
		},
	},
	Query: {
		schoolBooks: () => {
			return [
				{ title: 'title1', author: { name: 'author1' }, courses: [{ name: 'Diploma' },{ name: 'B.E' }] },
				{ title: 'title1', author: { name: 'author1' }, colors: [{ name: 'Blue' },{ name: 'Orange' }] },
			];
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
