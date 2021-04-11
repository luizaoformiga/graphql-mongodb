import postModel from '../../models/post'; 

export default {
  Post: {
    author: (post) => postModel.find(post.author)
  },
  Query: {
    posts: () => postModel.find(),
    post: (_, { id }) => postModel.findById(id)
  },
  Mutation: {
    createPost: async (_, { data }) => {
      const create = await postModel.create(data);
      return create;
    },
    updatePost: async (_, { id, data }) => {
      const update = await postModel.findByIdAndUpdate(id, data, { new: true });
      return update;
    }, 
    deletePost: async (_, { id }) => {
      const deleted = await postModel.deleteOne(id);
      return deleted; 
    } 
  }  
}