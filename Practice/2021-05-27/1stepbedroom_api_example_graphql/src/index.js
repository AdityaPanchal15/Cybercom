const { ApolloServer, gql, UserInputError } = require('apollo-server');
const category = require('./dataSource/category');

const typeDefs = gql`
	type Query {
		product(categoryName: Products!): SubCategory
		productCursor(categoryName: Products!, first: Int, after: String): CategoryResultCursor
	}
	enum Products {
		bedroom
		living
	}
	type SubCategory {
		productLinks(first: Int, offset: Int): [Links]
		img: String
		categories(first: Int, offset: Int): [Category]
	}
	type Links {
		linkTitle: String
		link: String
	}
	type Category {
		src: String
		name: String
	}
	type Edge {
		node: Links
		cursor: String
	}
	type PageInfo {
		endCursor: String
		hasNextPage: Boolean
	}
	type CategoryResultCursor {
		edges: [Edge]
		pageInfo: PageInfo!
		totalCount: Int!
	}
`;

const resolvers = {
	Query: {
		product: (_, { categoryName }) => {
			return category[categoryName];
		},
		productCursor: (_, { categoryName, first, after }) => {
			const linkArray = category[categoryName].productLinks;
			start = 0;
			if (after !== undefined) {
				const id = new Buffer.from(after, 'base64').toString('ascii');
				nodeIndex = linkArray.findIndex((product) => product.linkTitle === id);
				if (nodeIndex === -1) {
					throw new UserInputError('after does not exist');
				}
				start = nodeIndex + 1;
			}

			const totalCount = linkArray.length;

			const node = start < totalCount ? linkArray.slice(start, start + first) : null;

			const hasNextPage = start + first < totalCount;

			let endCursor;

			const edges =
				node !== null
					? node.map((val) => {
							const cursor = new Buffer.from(val.linkTitle).toString('base64');
							endCursor = cursor;
							return {
								node: val,
								cursor,
							};
					  })
					: null;

			const pageInfo = {
				endCursor: endCursor ? endCursor : null,
				hasNextPage,
			};
			const result = {
				edges,
				pageInfo,
				totalCount,
			};
			return result;
		},
	},
	SubCategory: {
		productLinks: (parent, { first, offset = 0 }) => {
			return parent.productLinks.slice(offset, first + offset);
		},
		categories: (parent, { first, offset = 0 }) => {
			return parent.categories.slice(offset, first + offset);
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
