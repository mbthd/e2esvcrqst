const graphql = require('graphql');
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLInt, 
  GraphQLSchema, 
  GraphQLNonNull, 
  GraphQLList 
} = graphql;
// var GraphQLSchema = require('graphql').GraphQLSchema;
// var GraphQLObjectType = require('graphql').GraphQLObjectType;
// var GraphQLList = require('graphql').GraphQLList;
// var GraphQLObjectType = require('graphql').GraphQLObjectType;
// var GraphQLNonNull = require('graphql').GraphQLNonNull;
// // var GraphQLID = require('graphql').GraphQLID;
// var GraphQLString = require('graphql').GraphQLString;
// // var GraphQLInt = require('graphql').GraphQLInt;
// // var GraphQLDate = require('graphql-date');
var ContactgqlModel = require('../src/models/contactgql');


// Schema defines data on Graph like object types (contact type), relation
// between object types and describes how it interacts with data to retrieve or mutate data

// var mockContactgqlData = [
//   { full_name:"any name", ldap:"ldapid1", email:"any_email@email.com", id:1 },
//   { full_name:"my name", ldap:"ldapid2", email:"my_email@email.com", id:2 },
//   { full_name:"your name", ldap:"ldapid3", email:"your_email@email.com", id:3 }
// ]

const contactgqlType = new GraphQLObjectType({
  name: 'contactgql',
  fields: () => {
    return {
      _id: { type: GraphQLString },
      full_name: { type: GraphQLString },
      ldap: { type: GraphQLString },
      email: { type: GraphQLString },
    }
  }
});
// Create a GraphQL Query Type that calls list of contacts & single contact by id
// RootQuery describes how users can use graph & grab data
// to get all contacts and associated data
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      contactgqls: {
        type: contactgqlType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Contactgql.findById(args.id);
        }
      },
      contactgqls:{
        type: new GraphQLList(contactgqlType),
        resolve(parent, args) {
          return Contactgql.find({});
          }
        }
      }
    }
});


// // Add Mutation for CRUD Operation to Contactgql Schema
// var mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => {
//     return {
//       addContactgql: {
//         type: contactgqlType,
//         args: {
//           full_name: {
//             type: new GraphQLNonNull(GraphQLString)
//           },
//           ldap: {
//             type: new GraphQLNonNull(GraphQLString)
//           },
//           email: {
//             type: new GraphQLNonNull(GraphQLString)
//           }
//         },
//         resolve: (root, params) => {
//           const contactgqlModel = new ContactgqlModel(params);
//           const newContactgql = contactgqlModel.save();
//           if (!newContactgql) {
//             throw new Error('Error');
//           }
//           return newContactgql
//         }
//       },
//       updateContactgql: {
//         type: contactgqlType,
//         args: {
//           id: {
//             name: 'id',
//             type: new GraphQLNonNull(GraphQLString)
//           },
//           full_name: {
//             type: new GraphQLNonNull(GraphQLString)
//           },
//           ldap: {
//             type: new GraphQLNonNull(GraphQLString)
//           },
//           email: new GraphQLNonNull(GraphQLString)
//         }
//       },
//       resolve(root, params) {
//         return ContactgqlModel.findByIdAndUpdate(params.id, {
//           full_name: params.full_name, ldap: params.ldap, email: params.email }, (err) => {
//             if (err) return next(err);
//         });
//       },
//       removeContactgql: {
//         type: contactgqlType,
//         args: {
//           id: {
//             type: new GraphQLNonNull(GraphQLString)
//           }
//         },
//         resolve(root, params) {
//           const removeContactgql = ContactgqlModel.findByIdAndRemove(params.id).exec();
//           if (!removeContactgql) {
//             throw new Error('Error')
//           }
//           return removeContactgql;
        // }
      // }
    // }
  // }
// });

// module.exports = new GraphQLSchema({query: queryType, Mutation: mutation});
module.exports = new GraphQLSchema({query: queryType});