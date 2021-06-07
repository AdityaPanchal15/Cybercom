const { ApolloServer, gql } = require('apollo-server');
const Products = require('./datasource/products');
const policy = require('./datasource/policy');

const typeDefs = gql`
	type Query {
		hello: String
		products: [Product]
		policy(url:String): Policy
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
	type Policy {
		pageInfo: PageInfo
		content: Content
		design: Design
		metaData: MetaData
	}
	type PageInfo {
		pageTitle: String
		url: String
		status: Boolean
	}
	type Content {
		contentHeading: String
		contentDetails: String
	}
	type Design {
		layout: String
		layout_update_xml: Reference
	}
	type Reference {
		reference: [References]
	}
	type References {
		action: Action
		block: Block
	}
	type Action {
		type: String
		name: String
	}
	type Block {
		action: BlockAction
	}
	type BlockAction {
		block_id: String
	}
	type MetaData {
		keywords:String,
		description:String
	}
`;
const resolvers = {
	Query: {
		hello: (_, __, { dataSources }) => {
			dataSources.products.ProductAPI();
			return 'hello world';
		},
		products: (_, __, { dataSources }) => {
			return dataSources.products.ProductAPI();
		},
		policy:(_,{url})=>{
			const result = policy.find((data)=>data.pageInfo.url===url)
			return result
		}
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
