import { model, Schema} from 'mongoose'

import User from './User'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
		  
  },
  job: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
   },
   password: {
      type: String,
      required: true
    },
    idPublic: {
      type: String,
      required: true
    }

}) 

const userModel = model<User>('users', userSchema)

export default userModel

