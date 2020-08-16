import { IUsersRepository } from '../../repositories/IUsersRepository'

export class ListUsersUseCase {
   constructor( private userRepo: IUserRepository) {}

   async execute() {
     const users = await this.userRepo.list()

     return users

   }

}
