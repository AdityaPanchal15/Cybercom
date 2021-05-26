const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		completed: Boolean!
	}
	type TodosResult {
		todos: [Todo]
		totalCount: Int
	}
	type Edge {
		cursor: String!
		node: Todo!
	}
	type PageInfo {
		endCursor: String
		hasNextPage: Boolean!
	}
	type TodosResultCursor {
		edges: [Edge]!
		pageInfo: PageInfo!
		totalCount: Int!
	}
	type Query {
		allTodos(count: Int, first: Int, offset: Int): TodosResult
		allTodosCursor(after: String, first: Int): TodosResultCursor
	}
`;

module.exports = typeDefs