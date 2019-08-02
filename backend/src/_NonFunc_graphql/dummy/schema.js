const { GraphQLSchema } = require('graphql');
const DummyContactQueryType = require('../dummy/queries');

const DummyContactSchema = new GraphQLSchema({
    query: DummyContactQueryType
});





module.exports = DummyContactSchema;