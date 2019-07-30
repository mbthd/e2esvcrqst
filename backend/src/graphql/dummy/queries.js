const { GraphQLList, GraphQLObjectType } = require('graphql');
const { DummyContactType } = require('../dummy/types');
const DummyContacts = require('../../data/dummycontacts');



const DummyContactQueryType = new GraphQLObjectType({
    name: 'DummyContactQueryType',
    description: 'Query Schema for DummyContactType',
    fields: {
        dummycontacts: {
            type: new GraphQLList(DummyContactType),
            resolve: () => DummyContacts
        }
    }
});

module.exports = DummyContactQueryType;