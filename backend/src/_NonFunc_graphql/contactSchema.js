// const { GraphQLSchema } = require('graphql');
// const DummyContactQueryType = require('./queries');

const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} = require('graphql');
const GraphQLDate = require('graphql-date');
const ContactModel = require('../models/contactgql');


const ContactSchema = new GraphQLSchema({
    query: ContactQueryType
});





module.exports = ContactSchema;