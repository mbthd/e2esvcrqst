const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../src/graphql/dummy/schema');
const graphql = require('graphql');
const mongoose = require('mongoose');
// const cors = require("cors");

// Connect mongo database
mongoose.connect('mongodb://localhost/graphqlcontact', { promiseLibrary: require('bluebird'),
    useNewUrlParser: true })
    .then(() => console.log('mongodb connection successful'))
    .catch((err) => console.error(err));

// const QueryRoot = new graphql.GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//         hello: {
//             type: graphql.GraphQLString,
//             resolve: () => "Hello GraphQL World!"
//         }
//     })
// })

// const schema = new graphql.GraphQLSchema({ query: QueryRoot });
const app = express();

// GrahphQL server route
// app.use('*', cors());
app.use(
      '/', graphqlHTTP({
      schema: schema,
      rootVale: global,
      graphiql: true
      })
  );


// start server
var server = app.listen(8080, () => {
    console.log('GraphQL API server listening at port', server.address().port);
});