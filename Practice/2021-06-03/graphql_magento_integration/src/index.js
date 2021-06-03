const { ApolloServer, gql } = require('apollo-server');
const Products = require('./datasource/products');

const typeDefs = gql`
	type Query {
		hello: String
		products: [Product]
	}
	type Product {
		entity_id: String
		type_id: String
		sku: String
		created_at: String
		updated_at: String
		description: String
		short_description: String
		color: String
		material_type: String
		style: String
		mattress_type: String
		also_available: String
		bed_size_measure: String
		bed_type: String
		clock_type: String
		mattress_size: String
		mattress_position: String
		mattress_comfort: String
		mattress_top: String
		pillow_size: String
		pillow_fill: String
		brand: String
		collection_type: String
		product_type: String
		corner_type: String
		coffee_table_features: String
		comfort_level: String
		key_features: String
		table_top_style: String
		table_top_shape: String
		tailoring: String
		mattress_thickness: String
		is_suspended: String
		name: String
		meta_title: String
		meta_description: String
		regular_price_with_tax: Int
		regular_price_without_tax: Int
		final_price_with_tax: Int
		final_price_without_tax: Int
		is_saleable: Boolean
		image_url: String
	}
`;
const resolvers = {
	Query: {
		hello: (_, __, { dataSources }) => {
			dataSources.products.ProductAPI();
			return 'hello world';
		},
		products: (_,__, { dataSources }) => {
			return dataSources.products.ProductAPI();
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return { products: new Products() };
	},
});

server.listen().then(({ url }) => {
	console.log(`server started at port ${url}`);
});
