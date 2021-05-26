
const { ApolloServer, gql } = require('apollo-server-express');
const admin = require('firebase-admin');
var serviceAccount = require("../nuxt-demo-app-6526b-firebase-adminsdk-o2q9t-365a447e6a.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://nuxt-demo-app-6526b-default-rtdb.firebaseio.com"
  });
const express = require('express');
const functions = require('firebase-functions');
const app = express();

const typeDefs = gql`
	type Hotdog {
		isKosher: Boolean
		location: String
		name: String
		style: String
		website: String
	}
	type Query {
		hotdogs: [Hotdog]
	}
`;

const resolvers = {
	Query: {
		hotdogs: () => {
			return admin
				.database()
				.ref('hotdogs')
				.once('value')
				.then((snap) => snap.val())
				.then((val) => Object.keys(val).map((key) => val[key]));
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// server.listen().then(({ url }) => console.log(`server started at ${url}`));
server.applyMiddleware({app,path:'/',cors:true})
exports.graphql = functions.https.onRequest(app)
