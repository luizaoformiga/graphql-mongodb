import userModel from '../../models/user'; 

export default {
  User: {
    fullName: (user) => `${user.firstname} ${user.lastName}`
  },
  Query: {
    users: () => userModel.find(),
    user: (_, { id }) => userModel.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => {
      const create = await userModel.create(data);
      return create;
    },
    updateUser: async (_, { id, data }) => {
      const update = await userModel.findByIdAndUpdate(id, data, { new: true });
      return update;
    }, 
    deleteUser: async (_, { id }) => {
      const deleted = await userModel.deleteOne(id);
      return deleted; 
    } 
  }  
}