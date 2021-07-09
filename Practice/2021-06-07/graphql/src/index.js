const { ApolloServer, gql } = require('apollo-server');
// const Products = require('./datasource/products');
const policy = require('./datasource/policy');
const product = require('./datasource/product');
const subCategory = require('./datasource/subCategory');
const coupons = require('./datasource/coupons');
const brands = require('./datasource/brands');

const typeDefs = gql`
	type Query {
		product(productType: String!): Product
		policy(url: String): Policy
		subCategory(categoryType: String!): [subCategory]
		subCategoryFilter(categoryType: String,mattress_size: String,mattress_position: String,mattress_comfort: String): [subCategory]
		itemSet(sku: String): [subCategory]
		coupons: Coupons
		brands(char:String!): [Brands]
	}
	type Brands {
		char:String
		src:String
		link:String
		name:String
	}
	type Coupons {
		totalOrderBasedDiscount: [TotalOrderBasedDiscount]
		manufacturerDiscount: [ManufacturerDiscountCoupon]
	}
	type TotalOrderBasedDiscount {
		amount: String
		save: String
		details: String
	}
	type ManufacturerDiscountCoupon {
		src: String
		amount: String
		code: String
		details: String
		orders: String
	}
	type Product {
		productLinks: [Link]
		img: String
		categories: [Category]
	}
	type Link {
		linkTitle: String
		link: String
	}
	type Category {
		src: String
		name: String
	}
	type subCategory {
		src: String
		title: String
		subTitle: String
		webId: String
		specialPrice: String
		price: String
		originalPrice: String
		numberOfRating: String
		rating: Float
		sku: String
		productType: String
		comfortLevel:String,
		mattress_thickness:String,
		mattress_type:String,
		mattress_position:String,
		mattress_comfort:String,
		mattress_top:String,
		mattress_size:String,
	}
	# type Product {
	# 	entity_id: String
	# 	type_id: String
	# 	sku: String
	# 	created_at: String
	# 	updated_at: String
	# 	description: String
	# 	short_description: String
	# 	color: String
	# 	material_type: String
	# 	style: String
	# 	mattress_type: String
	# 	also_available: String
	# 	bed_size_measure: String
	# 	bed_type: String
	# 	clock_type: String
	# 	mattress_size: String
	# 	mattress_position: String
	# 	mattress_comfort: String
	# 	mattress_top: String
	# 	pillow_size: String
	# 	pillow_fill: String
	# 	brand: String
	# 	collection_type: String
	# 	product_type: String
	# 	corner_type: String
	# 	coffee_table_features: String
	# 	comfort_level: String
	# 	key_features: String
	# 	table_top_style: String
	# 	table_top_shape: String
	# 	tailoring: String
	# 	mattress_thickness: String
	# 	is_suspended: String
	# 	name: String
	# 	meta_title: String
	# 	meta_description: String
	# 	regular_price_with_tax: Int
	# 	regular_price_without_tax: Int
	# 	final_price_with_tax: Int
	# 	final_price_without_tax: Int
	# 	is_saleable: Boolean
	# 	image_url: String
	# }
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
		keywords: String
		description: String
	}
`;
const resolvers = {
	Query: {
		// products: (_, __, { dataSources }) => {
		// 	return dataSources.products.ProductAPI();
		// },
		policy: (_, { url }) => {
			const result = policy.find((data) => data.pageInfo.url === url);
			return result;
		},
		product: (_, { productType }) => {
			return product[productType];
		},
		subCategory: (_, { categoryType }) => {
			const result = subCategory.filter((item) => item.productType === categoryType);
			return result;
		},
		subCategoryFilter:(_,param) => {
			
			if(param.mattress_size && !param.mattress_comfort){
				result = subCategory.filter((item) => item.productType === param.categoryType && item.mattress_size === param.mattress_size);
			}else if(!param.mattress_size && param.mattress_comfort){
				result = subCategory.filter((item) => item.productType === param.categoryType && item.mattress_comfort === param.mattress_comfort);
			}else {
				result = subCategory.filter((item) => item.productType === param.categoryType && item.mattress_size === param.mattress_size && item.mattress_position === param.mattress_position && item.mattress_comfort === param.mattress_comfort);
			}
			return result;
		},
		itemSet: (_, { sku }) => {
			const result = subCategory.filter((item) => {
				if (item.sku !== sku && item.sku) {
					return item.sku.slice(0, 4) === sku.slice(0, 4);
				}
			});
			return result;
		},
		coupons:()=>{
			return coupons
		},
		brands:(_,{ char }) => {
			const result = brands.filter((item) => item.char === char);
			return result;
		}
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// dataSources: () => {
	// 	return { product: new Product() };
	// },
});

server.listen().then(({ url }) => {
	console.log(`server started at port ${url}`);
});
