// Uppercasing strings

const { ApolloServer, gql, SchemaDirectiveVisitor } = require('apollo-server');
const { GraphQLScalarType, Kind, defaultFieldResolver } = require('graphql');

const typeDefs = gql`
	directive @upper on FIELD_DEFINITION

	type Query {
		hello: String @upper
	}
`;

class UpperCaseDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field) {
		const { resolve = defaultFieldResolver } = field;
		field.resolve = async function (...args) {
			const result = await resolve.apply(this, args);
			if (typeof result === 'string') {
				return result.toUpperCase();
			}
			return result;
		};
	}
}

const resolvers = {
	Query:{
		hello: () => {
			return 'Hello world!';
		  },
	
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	schemaDirectives: {
		upper: UpperCaseDirective,
		upperCase: UpperCaseDirective,
	},
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
