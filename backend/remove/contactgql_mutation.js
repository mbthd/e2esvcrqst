
import {
    GraphQLNonNull,
    GraphQLBoolean
  } from 'graphql';
  
  import contactgqlInputType from '../../models/contactgql';
  import contactgqlModel from '../../models/contactgql';  
  
  export default {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(contactgqlInputType)
      }
    },
    async resolve (root, params, options) {
      const contactgqlModel = new contactgqlModel(params.data);
      const newContactgql = await contactgqlModel.save();
  
      if (!newContactgql) {
        throw new Error('Error adding new comment');
      }
      return true;
    }
  };