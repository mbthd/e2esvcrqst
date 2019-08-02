const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType
} = require('graphql');

const DummyContactType = new GraphQLObjectType({
    name: 'DummyContactType',
    description: 'Contact list',
    fields: {
        id: { type: GraphQLString },
        full_name: { type: GraphQLString },
        ldap: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});


module.exports = { DummyContactType }
