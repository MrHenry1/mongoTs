import { IUserRepository } from '../IUserRepository.ts'

import User from '../../entities/User.ts'
import userModel from '../../entities/userModel.ts'

export class MongoUserRepo implements IUserRepository {

  async findByEmail(email: string): Promise<User> {
      const user = await userModel.findOne({ email })
      return user
   }

   async findByPublicId(idPublic: string): Promise<User> {
     const user = await userModel.findOne({ idPublic })
     return user
   }

   async save(user: User): Promise<void> {
      await userModel.create( user )
   }
  
   async list(): Promise<User[]> {
      const users = await userModel.find()
      return users
   }

   async delete(idPublic: string): Promise<void> {
     await userModel.findOneAndDelete({ idPublic })
   } 

   async update(idPublic: string, column: string, value: any): Promise<void> {
     if(column === "bio") {
       await userModel.findOneAndUpdate({ idPublic }, { bio: value })
     }
     else if(column === "name") {
       await userModel.findOneAndUpdate({ idPublic }, { name: value })
     }
     else if(column === "age") {
        await userModel.findOneAndUpdate({ idPublic }, { age: value })
     }
     else {
       throw new Error('Cant change it')
     }

   }
}
