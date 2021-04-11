import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true  
  }, 
  email: {
    type: String,
    required: true
  }, 
  active: {
    type: Boolean,
    required: true
  }   
})

const userModel = mongoose.model('User', schema);

export default userModel;