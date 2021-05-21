const { ApolloServer, gql, SchemaDirectiveVisitor } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

const typeDefs = gql`
	directive @date(format: String) on FIELD_DEFINITION

	scalar Date

	type Post {
		published: Date @date(format: "mm-dd-yyyy")
	}
	type Query {
		myDate: Post
	}
`;

class DateFormatDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field;
		const { format } = this.args;
		field.resolve = async function (...args) {
			const date = await resolve.apply(this, args);
			return require('dateformat')(date, format);
		};
		// The formatted Date becomes a String, so the field type must change:
		field.type = String;
	}
}

const resolvers = {
	Query: {
		myDate: () => {
			return { published: '21-05-2021' };
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	schemaDirectives: {
		date: DateFormatDirective,
	},
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
